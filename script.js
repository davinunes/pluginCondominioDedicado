console.log('Extensão carregada');



const interval = setInterval(()=>{
	// Fica monitorando a extesnão pode agir
	const ok = document.querySelector("#search_nu_placa");
	if(ok){
		var campoPlaca = $("#search_nu_placa");
		var pagina = $(location).attr('pathname').split("/");
		
		const meuBotao = document.querySelector("#it_remove_mascara");
		if(meuBotao){
			if(document.getElementById('it_remove_mascara').checked){
				
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
						$("#search_nu_placa").mask('%%%-$##$');
					});
				  });
				
				
			}else{
				
				$("#search_nu_placa").unmask();
			}
			
		}else{
			console.log("Precisa Criar o Botão");
			
			// Crio o botão e adiciono na página
			const button = document.createElement("input");
			button.setAttribute("id","it_remove_mascara");
			button.setAttribute("name","it_remove_mascara");
			button.setAttribute("type","checkbox");
			$("#search_nu_placa").parent().append(button);
			$("#search_nu_placa").parent().append(" Remover Máscara");
		}


	}
},200);
