class BallDraw {

	//property of Class Ball Draw
	isBingo = false;
	cardNumber;
	isColumn = false;
	isRow = false;
	column;
	row;

	//constructor that recieve the arguements
	constructor(matrix, isCardCreated) {

		this.matrix = matrix;
		this.isCardCreated = isCardCreated;
	  	this.ballDrawns = [];
		this.arrayToCheck = [];

	}
  
	///method to draw random numbers 
	drawBall() {

		let number;

		//to check if the user already created cards
		if (this.isCardCreated){

			do {
				//to create random number from 1-75
				number = Math.floor(Math.random() * 75) + 1;
				
				//to check if the number is already selected
			  } while (this.ballDrawns.indexOf(number) !== -1);
		  
			//to push the number to the array
			  this.ballDrawns.push(number);
		  
			  // to determine what letter  does the number falls and print it along side with the number
			  if (number > 0 && number <= 15) {
		
				pBallOutput.innerHTML = "B - \t" + number;
		
			  } else if (number > 15 && number <= 30) {
		
				pBallOutput.innerHTML = "I - \t" + number;
		
			  } else if (number > 30 && number <= 45) {
		
				pBallOutput.innerHTML = "N - \t" + number;
		
			  } else if (number > 45 && number <= 60) {
		
				pBallOutput.innerHTML = "G - \t" + number;
		
			  } else if (number > 60 && number <= 75) {
		
				pBallOutput.innerHTML = "O - \t" + number;
		
			  }

			  pBallOutput.classList.add('current-number');

			  // to call the methods to validate the card
			  this.markCard(number);
			  this.checkCard();
			  this.showMessage();
		
		//if no cards yet the program will alert message
		}else {

			alert ("Create BINGO card first!")

		}
	  
	}
  
	//method to mark the card
	markCard(number) {

		//indexmatrix to traverse in matrix
        for (let indexMatrix = 0; indexMatrix < this.matrix.length; indexMatrix++) {

			//index2D to traverse in the array of BINGO
          for (let index2D = 0; index2D < this.matrix[indexMatrix].length; index2D++) {

			//indexBingo to traverse on array single arrays
            for (let indexBingo = 0; indexBingo < this.matrix[indexMatrix][index2D].length; indexBingo++) {

				//validaton if the element is same with the drawball
              if (this.matrix[indexMatrix][index2D][indexBingo] == number) {

				//to mark the number
               document.getElementById(this.matrix[indexMatrix][index2D][indexBingo]).style.background = "green";
  
              }

            }

          }
		  
        }

      }

	  ///method to check the card for BINGO
      checkCard(){

		//loop to traverse every card
		for (let indexOfMatrix = 0; indexOfMatrix < this.matrix.length; indexOfMatrix++){

			//assigning values and id of data from table
			let col_0_row_0 = document.getElementById(this.matrix[indexOfMatrix][0][0]).style.background;
			let col_0_row_1 = document.getElementById(this.matrix[indexOfMatrix][0][1]).style.background;
			let col_0_row_2 = document.getElementById(this.matrix[indexOfMatrix][0][2]).style.background;
			let col_0_row_3 = document.getElementById(this.matrix[indexOfMatrix][0][3]).style.background;
			let col_0_row_4 = document.getElementById(this.matrix[indexOfMatrix][0][4]).style.background;

			let col_1_row_0 = document.getElementById(this.matrix[indexOfMatrix][1][0]).style.background;
			let col_1_row_1 = document.getElementById(this.matrix[indexOfMatrix][1][1]).style.background;
			let col_1_row_2 = document.getElementById(this.matrix[indexOfMatrix][1][2]).style.background;
			let col_1_row_3 = document.getElementById(this.matrix[indexOfMatrix][1][3]).style.background;
			let col_1_row_4 = document.getElementById(this.matrix[indexOfMatrix][1][4]).style.background;

			let col_2_row_0 = document.getElementById(this.matrix[indexOfMatrix][2][0]).style.background;
			let col_2_row_1 = document.getElementById(this.matrix[indexOfMatrix][2][1]).style.background;
			let col_2_row_2 = document.getElementById(this.matrix[indexOfMatrix][2][2]).style.background;
			let col_2_row_3 = document.getElementById(this.matrix[indexOfMatrix][2][3]).style.background;
			let col_2_row_4 = document.getElementById(this.matrix[indexOfMatrix][2][4]).style.background;

			let col_3_row_0 = document.getElementById(this.matrix[indexOfMatrix][3][0]).style.background;
			let col_3_row_1 = document.getElementById(this.matrix[indexOfMatrix][3][1]).style.background;
			let col_3_row_2 = document.getElementById(this.matrix[indexOfMatrix][3][2]).style.background;
			let col_3_row_3 = document.getElementById(this.matrix[indexOfMatrix][3][3]).style.background;
			let col_3_row_4 = document.getElementById(this.matrix[indexOfMatrix][3][4]).style.background;

			let col_4_row_0 = document.getElementById(this.matrix[indexOfMatrix][4][0]).style.background;
			let col_4_row_1 = document.getElementById(this.matrix[indexOfMatrix][4][1]).style.background;
			let col_4_row_2 = document.getElementById(this.matrix[indexOfMatrix][4][2]).style.background;
			let col_4_row_3 = document.getElementById(this.matrix[indexOfMatrix][4][3]).style.background;
			let col_4_row_4 = document.getElementById(this.matrix[indexOfMatrix][4][4]).style.background;

			//vertical checking
			if(col_0_row_0 == "green" && col_0_row_1 == "green" && col_0_row_2 == "green" && col_0_row_3 == "green" && col_0_row_4 == "green"){

				//loop to mark the number combinations differetly
				for (let index = 0; index < 5; index++){

					document.getElementById(this.matrix[indexOfMatrix][0][index]).style.background = "red";
					this.cardNumber = indexOfMatrix + 1;
					this.isColumn = true;
					this.column = 0;

				}
				
				this.isBingo = true;

			}

			if(col_1_row_0 == "green" && col_1_row_1 == "green" && col_1_row_2 == "green" && col_1_row_3 == "green" && col_1_row_4 == "green"){

				for (let index = 0; index < 5; index++){

					document.getElementById(this.matrix[indexOfMatrix][1][index]).style.background = "red";
					this.cardNumber = indexOfMatrix + 1;
					this.isColumn = true;
					this.column = 1;

				}

				this.isBingo = true;

			}

			if(col_2_row_0 == "green" && col_2_row_1 == "green" && col_2_row_2 == "green" && col_2_row_3 == "green" && col_2_row_4 == "green"){

				for (let index = 0; index < 5; index++){

					document.getElementById(this.matrix[indexOfMatrix][2][index]).style.background = "red";
					this.cardNumber = indexOfMatrix + 1;
					this.isColumn = true;
					this.column = 2;

				}

				this.isBingo = true;

			}

			if(col_3_row_0 == "green" && col_3_row_1 == "green" && col_3_row_2 == "green" && col_3_row_3 == "green" && col_3_row_4 == "green"){

				for (let index = 0; index < 5; index++){

					document.getElementById(this.matrix[indexOfMatrix][3][index]).style.background = "red";
					this.cardNumber = indexOfMatrix + 1;
					this.isColumn = true;
					this.column = 3;

				}

				this.isBingo = true;

			}

			if(col_4_row_0 == "green" && col_4_row_1 == "green" && col_4_row_2 == "green" && col_4_row_3 == "green" && col_4_row_4 == "green"){

				for (let index = 0; index < 5; index++){

					document.getElementById(this.matrix[indexOfMatrix][4][index]).style.background = "red";
					this.cardNumber = indexOfMatrix + 1;
					this.isColumn = true;
					this.column = 4;

				}

				this.isBingo = true;
				
			}

			//horizotal checking
			if(col_0_row_0 == "green" && col_1_row_0 == "green" && col_2_row_0 == "green" && col_3_row_0 == "green" && col_4_row_0 == "green"){

				for (let index = 0; index < 5; index++){

					document.getElementById(this.matrix[indexOfMatrix][index][0]).style.background = "red";
					this.cardNumber = indexOfMatrix + 1;
					this.isRow = true;
					this.row = 0;

				}
				
				this.isBingo = true;

			}

			if(col_0_row_1 == "green" && col_1_row_1 == "green" && col_2_row_1 == "green" && col_3_row_1 == "green" && col_4_row_1 == "green"){

				for (let index = 0; index < 5; index++){

					document.getElementById(this.matrix[indexOfMatrix][index][1]).style.background = "red";
					this.cardNumber = indexOfMatrix + 1;
					this.isRow = true;
					this.row = 1;

				}
				
				this.isBingo = true;

			}

			if(col_0_row_2 == "green" && col_1_row_2 == "green" && col_2_row_2 == "green" && col_3_row_2 == "green" && col_4_row_2 == "green"){

				for (let index = 0; index < 5; index++){

					document.getElementById(this.matrix[indexOfMatrix][index][2]).style.background = "red";
					this.cardNumber = indexOfMatrix + 1;
					this.isRow = true;
					this.row = 2;

				}
				
				this.isBingo = true;

			}

			if(col_0_row_3 == "green" && col_1_row_3 == "green" && col_2_row_3 == "green" && col_3_row_3 == "green" && col_4_row_3 == "green"){

				for (let index = 0; index < 5; index++){

					document.getElementById(this.matrix[indexOfMatrix][index][3]).style.background = "red";
					this.cardNumber = indexOfMatrix + 1;
					this.isRow = true;
					this.row = 3;

				}
				
				this.isBingo = true;

			}

			if(col_0_row_4 == "green" && col_1_row_4 == "green" && col_2_row_4 == "green" && col_3_row_4 == "green" && col_4_row_4 == "green"){

				for (let index = 0; index < 5; index++){

					document.getElementById(this.matrix[indexOfMatrix][index][4]).style.background = "red";
					this.cardNumber = indexOfMatrix + 1;
					this.isRow = true;
					this.row = 4;

				}
				
				this.isBingo = true;

			}

			//diagonal checking
			if(col_0_row_0 == "green" && col_1_row_1 == "green" && col_2_row_2 == "green" && col_3_row_3 == "green" && col_4_row_4 == "green"){

				for (let index = 0; index < 5; index++){

					document.getElementById(this.matrix[indexOfMatrix][index][index]).style.background = "red";
					this.cardNumber = indexOfMatrix + 1;

				}
				
				this.isBingo = true;

			}

			if(col_0_row_4 == "green" && col_1_row_3 == "green" && col_2_row_2 == "green" && col_3_row_1 == "green" && col_4_row_0 == "green"){

				for (let index = 0; index < 5; index++){

					for (innnerIndex = 4; innnerIndex >=0; innnerIndex --){

						document.getElementById(this.matrix[indexOfMatrix][index][innnerIndex]).style.background = "red";
						this.cardNumber = indexOfMatrix + 1;

					}

				}
				
				this.isBingo = true;

			}

		}

		return this.isBingo

      }

	  // method to alert message
	  showMessage(){

		if (this.isBingo == true) {

			if (this.isColumn){

				alert ("CONGRATULATIONS YOUR CARD BINGO AT CARD NUMBER " + this.cardNumber + " COLUMN " + this.column );

			}else if (this.isRow){

				alert ("CONGRATULATIONS YOUR CARD BINGO AT CARD NUMBER " + this.cardNumber + " ROW " + this.row );

			}else {

				alert ("CONGRATULATIONS YOUR CARD BINGO AT CARD NUMBER " + this.cardNumber);

			}

			

		}

	  }

}