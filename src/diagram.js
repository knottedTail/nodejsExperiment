var alternatingIndices = {8:18, 9:41, 10:123, 11:367,12:1288,13:4878,14:19536,15:85263,16:379799};

// $(document).ready( function () {
//   $('#tester').DataTable({
//     ajax: {url: "temp.json"},
//     columns: [
//       { data: "name"},
//       { data: "date"},
//       { data: "size"}
//     ]
//   });
// } );

function test(){

  $("span").css("fontSize", "28px");
  $("#diagramTable").append(
    `<tr>
    <td align="center">1</td>
    <td align="center"><a href ="diagram/svg/1_3_1.svg">3_1</a></td>
    <td align="center">1</td>
    <td align="center">{1}</td>
    <td align="center"><a href="./data/html/1_3_1.html">html</a>, <a href="./data/pdf/1_3_1.pdf" download>pdf</a>, <a href="./data/json/3_1(1).json" download>json</a></td>
  </tr>`
  )
};


function rearrangeTable(){
  $("span").css("fontSize", "28px");
  $("#diagramTable").append(
    `<tr>
    <td align="center">1</td>
    <td align="center"><a href ="diagram/svg/1_3_1.svg">3_1</a></td>
    <td align="center">1</td>
    <td align="center">{1}</td>
    <td align="center"><a href="./data/html/1_3_1.html">html</a>, <a href="./data/pdf/1_3_1.pdf" download>pdf</a>, <a href="./data/json/3_1(1).json" download>json</a></td>
  </tr>`
  )
}