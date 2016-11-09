# Salsah Components #

Salsah has a few main components with sub-components.

## Salsah Framework

## Salsah Search

### Simple search

### Extended search

### Faceted search

## Salsah View

The main content container in Salsah contains different kind of resource and search result views.

### Grid view
for search results and collections.

### List view
for search results

### Table view
for search results of one resource type

### Resource view
Component for one resource. The template depends on the Salsah object (see below)

### Split view
to compare resources.

### Graph view
to visualize the connections of a resource.

### Dashboard view

## Salsah Object

### Empty object

### Image  object

### Document object

### Video object

### Audio object

### Collection object
We can use the collection object component for collections, links and books.

### Region object
Special object to mark regions on a static medium like image or text  document.
 
### Sequence object
Special object to mark sequences in a dynamic medium like video or audio document.


## Salsah Property
Every resource has a different kind of metadata, and metadata has different kind of property types. Every property type should have his own component environment (called element).

### String element
An input text field

### Number element
An input text field for integer or floating point numbers.

### Richtext element
A text-area with formatting buttons.

### Date element

### Time element

### Location element
An input text field with a suggest-as-you-type function connected to geonames.org

### Resource-pointer element
Autocomplete or dropdown

### Selection element
This property can be used as a drop down, a checkbox or a radio button.

### Hierarchical list element
This property can be used as a drop down or a radio button.



## Salsah Admin

The salsah-admin-component includes an ontology editor (project admin) and a user admin interface.

## Salsah Exchange
In the Salsah Exchange we have two main components with import and export functions.

### Import tools

### Export tools

