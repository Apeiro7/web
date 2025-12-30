const game = new Chess();

const board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: handleMove
});

function handleMove(source, target) {
  const move = game.move({
    from: source,
    to: target,
    promotion: 'q'
  });

  if (move === null) return 'snapback';
  updateStatus();
}

function updateStatus() {
  let status = '';

  if (game.in_checkmate()) {
    status = 'Checkmate!';
  } else if (game.in_draw()) {
    status = 'Draw!';
  } else {
    status = `${game.turn() === 'w' ? 'White' : 'Black'} to move`;
    if (game.in_check()) status += ' (Check)';
  }

  document.getElementById('status').innerText = status;
}

document.getElementById('reset').onclick = () => {
  game.reset();
  board.start();
  updateStatus();
};

updateStatus();
