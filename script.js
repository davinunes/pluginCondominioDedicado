console.log('Extensão carregada');
var pagina = $(location).attr('pathname');


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
	$("a").each(function () {
		if($(this).attr("href") == "#"){

			$(this).removeAttr("href");
		}
	});

	if($("#pgwModal").is(":visible")){
		$("#ocorrencia-resposta-form").hide();
    
		if(typeof $(".ui.list > .item > .content > a") != undefined){
			let teste = $(".ui.list > .item > .content > a")
			$(".ui.list").css("display","inline-block")
			$(".ui.list").css("vertical-align","middle")
			// console.log(teste);
			for(i=0;i< teste.length;i++){
				url = teste[i].href;
				// console.log()
				if(url.match('(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF|whatsapp|heic|miui)$')){

					let img = "<img style='width:250px' src='"+teste[i].href+"'></img>"
					$(teste[i]).parent().append(img);
					$(teste[i]).remove();
				}
				if(url.match('(mp4|mpeg|3gp|avi|m4v|mov|mpg|wmv|asf)$')){

					let img = "<video controls style='width:250px' src='"+teste[i].href+"'></video>"
					$(teste[i]).parent().append(img);
					$(teste[i]).remove();
				}
				if(url.match('(m4a|wav)$')){

					let img = "<audio controls style='width:250px' src='"+teste[i].href+"'></audio>"
					$(teste[i]).parent().append(img);
					$(teste[i]).remove();
				}
			}
		
		}
	}

	if(pagina == "/sistema/condominio/ocorrencia"){
		let pingo = $(".tooltip-grid")
		var estilo = {
			"background-color": "lightskyblue",
			"font-size": "x-small",
			"width": "81%",
			"height": "auto",
			"padding": "5px"
		}
		for(i=0;i< pingo.length;i++){
			let texto = $(pingo[i]).attr("data-html")
			$(pingo[i]).html(texto)
			$(pingo[i]).css(estilo)
		}

	}

},200);