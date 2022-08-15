import { startTimer } from './timer';
import images from './images';

const initPuzzleGame = () => {
  // check if we are on the puzzle page
  const gameBoard = document.querySelector('.game-board');

  const generateGrid = (puzzle, shuffleCount, width, height) => {
    let empty = puzzle.indexOf(0);
    let lastPiece = empty;
    for (let i = 0; i < shuffleCount; i++) {
      const pieces = surroundingPieces(empty, width, height);
      pieces.filter(el => el === lastPiece );

      const pieceIndex = pieces[Math.floor(Math.random() * pieces.length)];

      puzzle[empty] = puzzle[pieceIndex];
      lastPiece = empty;

      puzzle[pieceIndex] = 0;
      empty = pieceIndex;
    }
    return puzzle;
  };

  const drawGrid = (grid) => {
    const imgHTMLArray = grid.map((el) => {
      if (el === 0) {
        return 'empty';
      } else {
        return `<img src="${images[el - 1]}" data-order="${el}" class="puzzle-img">`;
      }
    });

    const tdArray = document.querySelectorAll('td');
    tdArray.forEach((td, i) => {
      if (imgHTMLArray[i] === 'empty') {
        td.classList.add(imgHTMLArray[i]);
        td.innerHTML = `<span class="puzzle-img" data-order='16'></span>`;
      } else {
        td.innerHTML = imgHTMLArray[i];
      }
    });
  };

  const surroundingPieces = (z, w, h) => {
    const x = z % w;
    const y = Math.floor(z / h);

    const left = x === 0 ? 'none' : z - 1;
    const up = y === 0 ? 'none' : z - w;
    const right = x === (w - 1) ? 'none' : z + 1;
    const down = y === (h - 1) ? 'none' : z + w;
    return [left, up, right, down].filter((el) => el !== 'none');
  };

  const isValidMove = (tile) => {
    const tileColumn = tile.cellIndex;
    const tileRow = tile.parentElement.rowIndex;
    const emptyTile = document.querySelector('.empty');
    const emptyTileColumn = emptyTile.cellIndex;
    const emptyTileRow = emptyTile.parentElement.rowIndex;

    return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1)
            || (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1)
            || (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1)
            || (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
  };

  const moveTile = (tile) => {
    const emptyTile = document.querySelector('.empty');
    const emptyInnerHTML = emptyTile.innerHTML;
    emptyTile.innerHTML = tile.innerHTML;
    emptyTile.classList.remove('empty');
    tile.innerHTML = emptyInnerHTML;
    tile.classList.add('empty');
  };

  const checkSolved = (tiles, intervalId, moves) => {
    const tilesOrder = Array.from(document.querySelectorAll('.puzzle-img')).map((e) => e.dataset.order);

    if (tilesOrder.join() === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16') {
      clearInterval(intervalId);
      const time = `${document.getElementById('mm').innerText} : ${document.getElementById('ms').innerText}`;
      setTimeout(() => { alert(`Congragulations, you completed the puzzle in ${time} with ${moves} moves`) }, 100);
      document.querySelector('.game-board').classList.add('no-click');
    }
  };
  // Init
  if (gameBoard) {
    let moveCount = 0;
    let intervalId = null;
    const counterElement = document.querySelector('.move-counter');
    const tiles = document.querySelectorAll('td');
    document.querySelector('.reset').addEventListener('click', () => { location.reload(); });

    gameBoard.addEventListener('click', () => {
      intervalId = setInterval(startTimer, 1000);
    }, { once: true });

    /// generate a random grid  (grid, number of randomized moves, width, height)
    const grid = generateGrid([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0], 100, 4, 4);

    // populate the grid
    drawGrid(grid);

    tiles.forEach((tile) => {
      tile.addEventListener('click', () => {
        if (isValidMove(tile)) {
          moveCount++;
          counterElement.innerText = moveCount;
          moveTile(tile);
          checkSolved(tiles, intervalId, moveCount);
        }
      });
    });
  }
};

export { initPuzzleGame };
