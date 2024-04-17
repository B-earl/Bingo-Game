class BingoCard{

	constructor(){

		this.matrixCounter = 0;
  		this.matrix = [];
		this.isCardCreated = false;

	}
  
  generateMatrix = () => {
    //array for column
    let B = [];
    let I = [];
    let N = [];
    let G = [];
    let O = [];

    //for array B
    for (let counter = 0; counter < 5; counter++) {
      let temp;
        do {
           temp = Math.floor(Math.random() * 15) + 1;
        } while (B.indexOf(temp) !== -1);
        B.push(temp);
    }

    //for array I
    for (let counter = 0; counter < 5; counter++) {
      let temp;
        do {
           temp = Math.floor(Math.random() * 15) + 16;
        } while (I.indexOf(temp) !== -1);
        I.push(temp);
    }

    //for array N
    for (let counter = 0; counter < 5; counter++) {
      let temp;
        do {
           temp = Math.floor(Math.random() * 15) + 31;
        } while (N.indexOf(temp) !== -1);
        N.push(temp);
    }

    //for array G
    for (let counter = 0; counter < 5; counter++) {
      let temp;
        do {
           temp = Math.floor(Math.random() * 15) + 46;
        } while (G.indexOf(temp) !== -1);
        G.push(temp);
    }

    //for array O
    for (let counter = 0; counter < 5; counter++) {
      let temp;
        do {
           temp = Math.floor(Math.random() * 15) + 61;
        } while (O.indexOf(temp) !== -1);
        O.push(temp);
    }

    //create a new array for this bingo card and push a copy of the arrays containing the random numbers to it
    this.matrix.push([
      B.slice(), //create a copy of array B
      I.slice(), //create a copy of array I
      N.slice(), //create a copy of array N
      G.slice(), //create a copy of array G
      O.slice()  //create a copy of array O
    ]);
	// console.log(this.matrix);
  }

	//to create table
	table = () => {

			//table template
			 let table =  `<div>
			<table border = "1px">

				<tr>

					<th>B</th>
					<th>I</th>
					<th>N</th>
					<th>G</th>
					<th>O</th>

				</tr>
				<tr>
								
					<td id = "${this.matrix[this.matrixCounter][0][0]}">${this.matrix[this.matrixCounter][0][0]}</td>
					<td id = "${this.matrix[this.matrixCounter][1][0]}">${this.matrix[this.matrixCounter][1][0]}</td>
					<td id = "${this.matrix[this.matrixCounter][2][0]}">${this.matrix[this.matrixCounter][2][0]}</td>
					<td id = "${this.matrix[this.matrixCounter][3][0]}">${this.matrix[this.matrixCounter][3][0]}</td>
					<td id = "${this.matrix[this.matrixCounter][4][0]}">${this.matrix[this.matrixCounter][4][0]}</td>

				</tr>
				<tr>

					<td id = "${this.matrix[this.matrixCounter][0][1]}">${this.matrix[this.matrixCounter][0][1]}</td>
					<td id = "${this.matrix[this.matrixCounter][1][1]}">${this.matrix[this.matrixCounter][1][1]}</td>
					<td id = "${this.matrix[this.matrixCounter][2][1]}">${this.matrix[this.matrixCounter][2][1]}</td>
					<td id = "${this.matrix[this.matrixCounter][3][1]}">${this.matrix[this.matrixCounter][3][1]}</td>
					<td id = "${this.matrix[this.matrixCounter][4][1]}">${this.matrix[this.matrixCounter][4][1]}</td>

				</tr>
				<tr>

					<td id = "${this.matrix[this.matrixCounter][0][2]}">${this.matrix[this.matrixCounter][0][2]}</td>
					<td id = "${this.matrix[this.matrixCounter][1][2]}">${this.matrix[this.matrixCounter][1][2]}</td>
					<td id = "${this.matrix[this.matrixCounter][2][2]}" style = "background: green"><p id = "free">FREE</p></td>
					<td id = "${this.matrix[this.matrixCounter][3][2]}">${this.matrix[this.matrixCounter][3][2]}</td>
					<td id = "${this.matrix[this.matrixCounter][4][2]}">${this.matrix[this.matrixCounter][4][2]}</td>

				</tr>
				<tr>

					<td id = "${this.matrix[this.matrixCounter][0][3]}">${this.matrix[this.matrixCounter][0][3]}</td>
					<td id = "${this.matrix[this.matrixCounter][1][3]}">${this.matrix[this.matrixCounter][1][3]}</td>
					<td id = "${this.matrix[this.matrixCounter][2][3]}">${this.matrix[this.matrixCounter][2][3]}</td>
					<td id = "${this.matrix[this.matrixCounter][3][3]}">${this.matrix[this.matrixCounter][3][3]}</td>
					<td id = "${this.matrix[this.matrixCounter][4][3]}">${this.matrix[this.matrixCounter][4][3]}</td>

				</tr>
				<tr>

					<td id = "${this.matrix[this.matrixCounter][0][4]}">${this.matrix[this.matrixCounter][0][4]}</td>
					<td id = "${this.matrix[this.matrixCounter][1][4]}">${this.matrix[this.matrixCounter][1][4]}</td>
					<td id = "${this.matrix[this.matrixCounter][2][4]}">${this.matrix[this.matrixCounter][2][4]}</td>
					<td id = "${this.matrix[this.matrixCounter][3][4]}">${this.matrix[this.matrixCounter][3][4]}</td>
					<td id = "${this.matrix[this.matrixCounter][4][4]}">${this.matrix[this.matrixCounter][4][4]}</td>

				</tr>

			</table>
			<br>
		</div>`;

		//to return the table format
		
			return table;
        }

        drawCard = () => {

        //to get the user input of how many cards
		let txtNumberOfCards = document.getElementById("txtNumberOfCards");

		//validation of the user's input
        if (txtNumberOfCards.value == null || isNaN(txtNumberOfCards.value) || txtNumberOfCards.value == 0){

            alert("Please input valid number");

        }else{
        	//loop to generate number of bingo cards according to the input of the user
            for(let index = 1; index <= txtNumberOfCards.value; index++){

            	//for output
            	let pOutput = document.getElementById("pOutput");

				//to generate numbers
				this.generateMatrix();

				//to display the card
				pOutput.innerHTML += this.table();
				
				//for the table not to genrate same numbr
				this.matrixCounter++;

				//to check if the card is created
				this.isCardCreated = true;
			}

			this.passMatrix(this.matrix, this.isCardCreated);
		}

		txtNumberOfCards.value = null;
	}


	//call the class balldraw
	passMatrix(matrix, isCardCreated){

		objBallDraw = new BallDraw(matrix, isCardCreated);

	}

	
	clearBingoCard () {

		//reload page for instant clear
		location.reload();

	}

}