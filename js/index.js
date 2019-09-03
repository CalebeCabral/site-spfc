$(document).ready(function () {

	$(".posicoes .posicao").on('click', function () {

		console.log($(this).position().left);

		if (!$(this).hasClass('active')) {
			$(this).addClass('active').siblings().removeClass('active');
			$('.campo-cont .card-jogador').remove();
			$('.campo-cont').append('<div class="card-jogador opening"><div class="card-bg"><img class="img-fluid" src="./assets/images/card_bg.png"></div><img class="card-feixe" src="./assets/images/feixe.png"></div>');
			$(".card-jogador").css({ top: $(this).position().top, left: $(this).position().left })
		}

	});

});