$(document).ready(function () {
	var cardData = {};

	$(".posicoes .posicao").on('click', function () {
		$("#slctPosicao").val($(this).attr('id'));

		cardData.nome = $("#nomeCamisa").val() ? $("#nomeCamisa").val() : 'Sr. Oswaldo';
		cardData.numero = $("#numCamisa").val() ? $("#numCamisa").val() : '10';
		cardData.posicao = $("#slctPosicao").find(':selected').text() ? $("#slctPosicao").find(':selected').text() : '';

		setActivePosition($(this), cardData);
	});

	$("#slctPosicao").on('change', function () {
		var posicao = $(this).val() ? $(this).val() : '';
		var $campoPos = $(".posicoes .posicao#" + posicao);

		cardData.nome = $("#nomeCamisa").val() ? $("#nomeCamisa").val() : 'Sr. Oswaldo';
		cardData.numero = $("#numCamisa").val() ? $("#numCamisa").val() : '10';
		cardData.posicao = $(this).find(':selected').text() ? $(this).find(':selected').text() : '';

		setActivePosition($campoPos, cardData);
	});

	$(window).resize(function () {
		var fieldPosition = $(".posicoes").find(".active");

		if (fieldPosition.length) {
			var posicao = {
				left: fieldPosition.position().left + (fieldPosition.outerWidth() / 2),
				bottom: $('.posicoes').height() - (fieldPosition.position().top + fieldPosition.outerHeight())
			}

			$(".card-jogador").css({ left: posicao.left, bottom: posicao.bottom });
		}
	});

	function generateCard(dados) {

		return '<div class="card-jogador opening"><div class="card-bg"><img class="img-fluid" src="./assets/images/card_bg.png"><div class="card-dados"><div class="card-dados__nome">' + dados.nome + '</div><div class="card-dados__num">' + dados.numero + '</div><div class="card-dados__pos">' + dados.posicao + '</div><div class="card-dados__logo"><img class="img-fluid" src="./assets/images/card_escudo.png"><img src="./assets/images/card_bandeira.png"></div><div class="card-dados__foto"><img class="img-fluid" src="./assets/images/foto.png"></div><div class="card-dados__jogadores"><p class="pr-3 pt-1">Amoroso</p><p class="pt-1">Kaka</p><p class="pt-1">Luizinho</p><p>Raí</p><p>Belini</p><p>Amoroso</p><p>Forlan</p></div></div></div><img class="card-feixe" src="./assets/images/feixe.png"></div>';
	}

	function setActivePosition(fieldPosition, dados) {
		var posicao = {
			left: fieldPosition.position().left + (fieldPosition.outerWidth() / 2),
			bottom: $('.posicoes').height() - (fieldPosition.position().top + fieldPosition.outerHeight())
		}

		if (!fieldPosition.hasClass('active')) {
			$(fieldPosition).addClass('active').siblings().removeClass('active');
			$('.campo-cont .campo-bg .card-jogador').remove();
			$('.campo-cont .campo-bg').append(generateCard(dados));
			$(".card-jogador").css({ left: posicao.left, bottom: posicao.bottom });
		}
	}

});