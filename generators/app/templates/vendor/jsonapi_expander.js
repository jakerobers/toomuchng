var JSONApiExpanderBase,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

JSONApiExpanderBase = (function() {
  JSONApiExpanderBase.prototype.parent = null;

  JSONApiExpanderBase.prototype.data = null;

  JSONApiExpanderBase.prototype.output = null;

  function JSONApiExpanderBase(data, output, parent) {
    if (!_.isObject(data)) {
      throw new Error("data must be an object");
    }
    if (!_.isArray(output)) {
      throw new Error("output must be an array");
    }
    this.data = data;
    this.output = output;
    this.parent = parent;
  }

  JSONApiExpanderBase.prototype.generateBaseOutputObject = function($included_datum) {
    if (!_.isObject($included_datum)) {
      throw new Error("$included_datum must be an object");
    }
    return {
      $included_datum: $included_datum
    };
  };

  JSONApiExpanderBase.prototype.cleanOutputObject = function(output_object) {
    if (!_.isObject(output_object)) {
      throw new Error("output_object must be an Object");
    }
    if ('$included_datum' in output_object) {
      return delete output_object['$included_datum'];
    }
  };

  JSONApiExpanderBase.prototype.getRelationships = function(output_object, key) {
    var $included_datum;
    if (!_.isObject(output_object)) {
      throw new Error("output_object must be an Object");
    }
    $included_datum = output_object.$included_datum;
    if ($included_datum == null) {
      console.warn("Missing '$included_datum' property on: ", output_object);
    } else if (!('relationships' in output_object['$included_datum'])) {
      console.warn("Missing 'relationships' property on '" + $included_datum['type'] + "', data given was:", $included_datum);
    } else if (!(key in $included_datum['relationships'])) {
      console.warn("Missing '" + key + "' property on '" + $included_datum['type'] + ".relationships', data given was: ", $included_datum['relationships']);
    } else if ($included_datum['relationships'][key] == null) {
      return null;
    } else if (!('data' in $included_datum['relationships'][key])) {
      console.warn("Missing 'data' property on '" + $included_datum['type'] + ".relationships." + key + "', data given was: ", $included_datum['relationships'][key]);
    } else {
      return $included_datum['relationships'][key]['data'];
    }
    return null;
  };

  JSONApiExpanderBase.prototype.generateOutputObject = function(linkage, existing_output_array) {
    var $included_datum, existing_output_object, i, id, j, len, len1, output_object, ref, resource, type;
    if (!_.isObject(linkage)) {
      throw new Error("linkage must be an object");
    }
    if (!('id' in linkage)) {
      throw new Error("Linked objects must contain an id");
    }
    if (!('type' in linkage)) {
      throw new Error("Linked objects must contain a type");
    }
    type = linkage.type, id = linkage.id;
    output_object = null;
    if (_.isArray(existing_output_array)) {
      for (i = 0, len = existing_output_array.length; i < len; i++) {
        existing_output_object = existing_output_array[i];
        $included_datum = existing_output_object.$included_datum;
        if ($included_datum['id'] !== id) {
          continue;
        }
        if ($included_datum['type'] !== type) {
          continue;
        }
        return existing_output_object;
      }
    }
    $included_datum = null;
    ref = this.data['included'];
    for (j = 0, len1 = ref.length; j < len1; j++) {
      resource = ref[j];
      if (!(resource != null)) {
        continue;
      }
      if (resource['id'] !== id) {
        continue;
      }
      if (resource['type'] !== type) {
        continue;
      }
      $included_datum = resource;
      break;
    }
    if ($included_datum == null) {
      $included_datum = {
        id: id
      };
    }
    output_object = this.generateBaseOutputObject($included_datum);
    return output_object;
  };

  JSONApiExpanderBase.prototype.attributes = function(attrs) {
    var $included_datum, attr, i, index, j, len, len1, output_object, ref;
    if (!_.isArray(attrs)) {
      attrs = [];
    }
    ref = this.output;
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      output_object = ref[index];
      $included_datum = output_object.$included_datum;
      if ($included_datum == null) {
        continue;
      }
      output_object['id'] = $included_datum['id'];
      if ($included_datum['attributes'] == null) {
        continue;
      }
      for (j = 0, len1 = attrs.length; j < len1; j++) {
        attr = attrs[j];
        if (attr in $included_datum['attributes']) {
          output_object[attr] = $included_datum['attributes'][attr];
        }
      }
    }
    return this;
  };

  JSONApiExpanderBase.prototype.relation = function(key) {
    var child_output_array, child_output_object, i, included, j, len, len1, output_object, ref, relationship, relationships;
    if (!_.isString(key)) {
      throw new Error("key must be a string");
    }
    included = this.data.included;
    child_output_array = [];
    ref = this.output;
    for (i = 0, len = ref.length; i < len; i++) {
      output_object = ref[i];
      relationships = this.getRelationships(output_object, key);
      if (_.isNull(relationships)) {
        output_object[key] = null;
      }
      if (_.isArray(relationships)) {
        for (j = 0, len1 = relationships.length; j < len1; j++) {
          relationship = relationships[j];
          if (!(relationship != null)) {
            continue;
          }
          child_output_object = this.generateOutputObject(relationship, child_output_array);
          if (child_output_object != null) {
            if (indexOf.call(child_output_array, child_output_object) < 0) {
              child_output_array.push(child_output_object);
            }
            (output_object[key] != null ? output_object[key] : output_object[key] = []).push(child_output_object);
          }
        }
      } else if (_.isObject(relationships)) {
        child_output_object = this.generateOutputObject(relationships, child_output_array);
        if (child_output_object != null) {
          child_output_array.push(child_output_object);
          output_object[key] = child_output_object;
        }
      }
    }
    return new JSONApiExpanderBase(this.data, child_output_array, this);
  };

  JSONApiExpanderBase.prototype.done = function() {
    var i, len, output_object, ref;
    ref = this.output;
    for (i = 0, len = ref.length; i < len; i++) {
      output_object = ref[i];
      this.cleanOutputObject(output_object);
    }
    return this.parent;
  };

  return JSONApiExpanderBase;

})();

this.JSONApiExpander = (function(superClass) {
  extend(JSONApiExpander, superClass);

  function JSONApiExpander(data) {
    var output, root, root_datum;
    if (!_.isObject(data)) {
      throw new Error("data must be an object");
    }

    root = data['data'];
    if (_.isObject(root) && !_.isArray(root)) {
      root = [root];
    }
    if (!_.isArray(root)) {
      throw new Error("root must be an object or an array");
    }
    output = (function() {
      var i, len, results;
      results = [];
      for (i = 0, len = root.length; i < len; i++) {
        root_datum = root[i];
        results.push(this.generateBaseOutputObject(root_datum));
      }
      return results;
    }).call(this);
    JSONApiExpander.__super__.constructor.call(this, data, output, this);
  }

  JSONApiExpander.prototype.toArray = function() {
    return this.done().output;
  };

  JSONApiExpander.prototype.toObject = function() {
    return this.done().output[0];
  };

  return JSONApiExpander;

})(JSONApiExpanderBase);