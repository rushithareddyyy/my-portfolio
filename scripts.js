$.ajax({
    type: "GET",
    url: "data.csv",
    success: function(data) {
        var data = Papa.parse(data).data;
        var table = $('<table></table>');
        $(data.slice(0, 10)).each(function(i, rowData) {
            var row = $('<tr></tr>');
            $(rowData).each(function(j, cellData) {
                row.append($('<td>'+cellData+'</td>'));
            });
            table.append(row);
        });
        $('body').append(table);
    }
});

