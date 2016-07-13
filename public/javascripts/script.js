function refresh() {
	$.get("/os/cpus", function(data) {
		$("#cpus").empty();
		for(var i in data){
			var cpu = data[i];
			$("#cpus").append(
				$("<tr>")
					.append($("<td>").html(cpu.model))
					.append($("<td>").html(cpu.speed))
			);
		}
	});
}

$(function() {

	$("#refresh").on("click", function() {
		refresh();	
	});
	refresh();
});
