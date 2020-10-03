## Photoboard

Display an organisation's personnel in a structured hierarchy tree. &nbsp;Photographs of staff members are accompanied by their role/title and name.

```
              +---------+              
              |         |              
              |         |              
              |         |              
              |         |              
              +---------+              
                 BOSS                  
               JANE DOE                                                               
+---------+   +---------+   +---------+
|         |   |         |   |         |
|         |   |         |   |         |
|         |   |         |   |         |
|         |   |         |   |         |
+---------+   +---------+   +---------+
   I.T.          CARGO         SALES   
 JOHN DOO       JILL GROW     JACK WOE 
```

![Screenshot of a possible org chart](https://i.imgur.com/1qp9Cq9.png)

## CSV File

The first two rows of the CSV file aid in displaying the output.  
__Row 1__ is the header, which is formatted like so: *Position, Name, Image URL*  
__Row 2__ contains the default image URL/Path in the event row 3 through n are unassigned.  

## Credits & Attribution

__FatCow Icons__  
../imgs/  
The emoji icons/images are licensed under the Creative Commons Attribution 3.0 (CC BY 3.0 US) and provided by fatcow.com/free-icons.  
&nbsp;  
__Papa Parse__  
../jsv/papaparse.min.js  
Is provided by (Matt Holt) papaparse.com && github.com/mholt/PapaParse and licensed under MIT License.  