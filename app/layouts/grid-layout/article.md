The GridLayout is a layout that arranges its child elements in a table structure of rows and columns. A cell can contain multiple child elements. Each one can span over multiple rows and columns, and even overlap the others. The GridLayout has one column and one row by default. To add additional columns and rows, you have to specify column definition items (separated by commas) to the columns property and row definition items (separated by commas) to the rows property of the GridLayout. The width of a column and the height of a row can be specified as an absolute amount of pixels, as a percentage of the available space or automatically.

A basic usage and definition of GridLayout,its rows and columns and its children in HTML:
<snippet id='grid-layout-html'/>

The GridLayout's children can be populated in code behind as well. You can also create additional rows and columns and place the newly added item exactly to cell you want it to be:
<snippet id='grid-layout-code'/>