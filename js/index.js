$(document).ready(function () {

	$(".posicoes .posicao").on('click', function () {

		console.log($(this).position().left);

		if (!$(this).hasClass('active')) {
			$(this).addClass('active').siblings().removeClass('active');
			$('.campo-cont .card-jogador').remove();
			$('.campo-cont').append('<div class="card-jogador opening"><div class="card-bg"><img class="img-fluid" src="./assets/images/card_bg.png"></div><div class="card-dados"><div class="card-dados__nome">Sr. Oswaldo</div><div class="card-dados__num">9</div><div class="card-dados__pos">Atacante</div><div class="card-dados__logo"><img class="img-fluid" src="./assets/images/card_escudo.png"><img src="./assets/images/card_bandeira.png"></div><div class="card-dados__foto"><img class="img-fluid" src="./assets/images/foto.png"></div><div class="card-dados__jogadores"><p class="pr-3 pt-1">Amoroso</p><p class="pt-1">Kaka</p><p class="pt-1">Luizinho</p><p>Raí</p><p>Belini</p><p>Amoroso</p><p>Forlan</p></div></div><img class="card-feixe" src="./assets/images/feixe.png"></div>');
			$(".card-jogador").css({ top: $(this).position().top, left: $(this).position().left });
		}

	});

});