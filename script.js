class TicTacToe {
    constructor(){
        this.isO = true;
    }
    
    init(){
        let $cells = $('.grid td');
        let self = this;
        $cells.on('click', function () {
            let $cell = $(this);
            
            $cell.html(self.isO ? 'O' : 'X');
            
            self.isO = !self.isO;
            
            console.log($cell.html());
                        
            
            
        });
    }
}

window.onload = function () {
    window.$ = jQuery;
    let game = new TicTacToe();
    game.init();
}
