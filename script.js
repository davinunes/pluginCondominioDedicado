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
				$("#placa_shadow").show();
				$("#search_nu_placa").hide();
				
			}else{
				$("#placa_shadow").hide().val("");
				$("#search_nu_placa").show();

			}
			
		}else{
			console.log("Precisa Criar o Botão");
			const btng = document.createElement("input");
			btng.setAttribute("id","placa_shadow");
			btng.setAttribute("type","text");
			btng.setAttribute("min","1");
			btng.addEventListener("keyup",()=>{
				let escrito = $("#placa_shadow").val();
				$("#search_nu_placa").val(escrito);
				console.log(escrito);

			});
			$("#search_nu_placa").parent().append(btng);

			
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

const livro = setInterval(()=>{

	if($("#pgwModal").is(":visible")){
		$("#ocorrencia-resposta-form").hide();
    
		if(typeof $(".ui.list > .item > .content > a") != undefined){
			let teste = $(".ui.list > .item > .content > a")
			// console.log(teste);
			for(i=0;i< teste.length;i++){
				url = teste[i].href;
				// console.log()
				if(url.match('(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF|whatsapp|heic)$')){

					let img = "<img style='width:250px' src='"+teste[i].href+"'></img>"
					$(teste[i]).parent().append(img);
					$(teste[i]).remove();
				}
			}
		
		}
	}

},200);