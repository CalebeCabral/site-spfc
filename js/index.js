$(document).ready(function () {

	$(".posicoes .posicao").on('click', function () {
		$("#slctPosicao").val($(this).attr('id'));

		var cardData = [];

		cardData[0] = $("#nomeCamisa").val() ? $("#nomeCamisa").val() : 'Sr. Oswaldo';
		cardData[1] = $("#numCamisa").val() ? $("#numCamisa").val() : '10';
		cardData[2] = $("#slctPosicao").find(':selected').text() ? $("#slctPosicao").find(':selected').text() : '';

		setActivePosition($(this), cardData);

	});

	$("#slctPosicao").on('change', function () {
		var posicao = $(this).val() ? $(this).val() : '';
		var $campoPos = $(".posicoes .posicao#" + posicao);
		var cardData = [];

		cardData[0] = $("#nomeCamisa").val() ? $("#nomeCamisa").val() : 'Sr. Oswaldo';
		cardData[1] = $("#numCamisa").val() ? $("#numCamisa").val() : '10';
		cardData[2] = $(this).find(':selected').text() ? $(this).find(':selected').text() : '';

		console.log(cardData);

		setActivePosition($campoPos, cardData);
	});

	function generateCard(dados) {

		return '<div class="card-jogador opening"><div class="card-bg"><img class="img-fluid" src="./assets/images/card_bg.png"></div><div class="card-dados"><div class="card-dados__nome">' + dados[0] + '</div><div class="card-dados__num">' + dados[1] + '</div><div class="card-dados__pos">' + dados[2] + '</div><div class="card-dados__logo"><img class="img-fluid" src="./assets/images/card_escudo.png"><img src="./assets/images/card_bandeira.png"></div><div class="card-dados__foto"><img class="img-fluid" src="./assets/images/foto.png"></div><div class="card-dados__jogadores"><p class="pr-3 pt-1">Amoroso</p><p class="pt-1">Kaka</p><p class="pt-1">Luizinho</p><p>Raí</p><p>Belini</p><p>Amoroso</p><p>Forlan</p></div></div><img class="card-feixe" src="./assets/images/feixe.png"></div>';
	}

	function setActivePosition(filedPosition, dados) {
		if (!filedPosition.hasClass('active')) {
			$(filedPosition).addClass('active').siblings().removeClass('active');
			$('.campo-cont .card-jogador').remove();
			$('.campo-cont').append(generateCard(dados));
			$(".card-jogador").css({ top: filedPosition.position().top, left: filedPosition.position().left });
		}
	}

});