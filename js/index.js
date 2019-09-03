$(document).ready(function () {

	$(".posicoes .posicao").on('click', function () {

		setActivePosition($(this));

	});

	$("#slctPosicao").on('change', function () {
		var posicao = $(this).val();

		var $campoPos = $(".posicoes .posicao#" + posicao);

		setActivePosition($campoPos);
	});

	function generateCard() {

		return '<div class="card-jogador opening"><div class="card-bg"><img class="img-fluid" src="./assets/images/card_bg.png"></div><div class="card-dados"><div class="card-dados__nome">Sr. Oswaldo</div><div class="card-dados__num">9</div><div class="card-dados__pos">Atacante</div><div class="card-dados__logo"><img class="img-fluid" src="./assets/images/card_escudo.png"><img src="./assets/images/card_bandeira.png"></div><div class="card-dados__foto"><img class="img-fluid" src="./assets/images/foto.png"></div><div class="card-dados__jogadores"><p class="pr-3 pt-1">Amoroso</p><p class="pt-1">Kaka</p><p class="pt-1">Luizinho</p><p>Raí</p><p>Belini</p><p>Amoroso</p><p>Forlan</p></div></div><img class="card-feixe" src="./assets/images/feixe.png"></div>';
	}

	function setActivePosition(filedPosition) {
		if (!filedPosition.hasClass('active')) {
			$(filedPosition).addClass('active').siblings().removeClass('active');
			$('.campo-cont .card-jogador').remove();
			$('.campo-cont').append(generateCard());
			$(".card-jogador").css({ top: filedPosition.position().top, left: filedPosition.position().left });
		}
	}

});