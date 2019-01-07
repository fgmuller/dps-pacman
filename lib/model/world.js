function World(){
    this.background_color = BACKGROUND_COLOR;
    this.height =  SCREEN_HEIGHT;
    this.width = SCREEN_WIDTH;
    this.tile_columns = this.width / TILE_SIZE; // 28 columnas
    this.tile_rows = this.height / TILE_SIZE; //31 filas
    this.map = [
    //      00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27
    /*00*/  25,34,34,34,34,34,34,34,34,34,34,34,34,51,50,34,34,34,34,34,34,34,34,34,34,34,34,24,
    /*01*/  27,76,76,76,76,76,76,76,76,76,76,76,76,54,55,76,76,76,76,76,76,76,76,76,76,76,76,26,
    /*02*/  27,76,15,38,38,14,76,15,38,38,38,14,76,54,55,76,15,38,38,38,14,76,15,38,38,14,76,26,
    /*03*/  27,76,17,76,76,16,76,17,76,76,76,16,76,54,55,76,17,76,76,76,16,76,17,76,76,16,76,26,
    /*04*/  27,76,49,12,12,48,76,49,12,12,12,48,76,49,48,76,49,12,12,12,48,76,49,12,12,48,76,26,
    /*05*/  27,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,26,
    /*06*/  27,76,15,38,38,14,76,15,14,76,15,38,38,38,38,38,38,14,76,15,14,76,15,38,38,14,76,26,
    /*07**/  27,76,19,12,12,18,76,54,55,76,19,12,12,43,42,12,12,18,76,54,55,76,19,12,12,18,76,26,
    /*08**/  27,76,76,76,76,76,76,54,55,76,76,76,76,54,55,76,76,76,76,54,55,76,76,76,76,76,76,26,
    /*09**/  29,36,36,36,36,14,76,54,44,38,38,46,76,54,55,76,15,38,38,45,55,76,15,36,36,36,36,28,
    /*10**/  76,76,76,76,76,27,76,54,42,12,12,18,76,19,18,76,19,12,12,43,55,76,26,76,76,76,76,76,
    /*11**/  76,76,76,76,76,27,76,54,55,76,76,76,76,76,76,76,76,76,76,54,55,76,26,76,76,76,76,76,
    /*12*/  76,76,76,76,76,27,76,54,55,76,21,36,36,76,76,36,36,20,76,54,55,76,26,76,76,76,76,76,
    /*13*/  34,34,34,34,34,48,76,49,48,76,26,76,76,76,76,76,76,27,76,49,48,76,49,34,34,34,34,34,
    /*14*/  76,76,76,76,76,76,76,76,76,76,26,76,76,76,76,76,76,27,76,76,76,76,76,76,76,76,76,76,
    /*15*/  36,36,36,36,36,14,76,47,46,76,26,76,76,76,76,76,76,27,76,47,46,76,15,36,36,36,36,36,
    /*16*/  76,76,76,76,76,27,76,54,55,76,23,34,34,34,34,34,34,22,76,54,55,76,26,76,76,76,76,76,
    /*17*/  76,76,76,76,76,27,76,54,55,76,76,76,76,76,76,76,76,76,76,54,55,76,26,76,76,76,76,76,
    /*18*/  76,76,76,76,76,27,76,54,55,76,15,38,38,38,38,38,38,14,76,54,55,76,26,76,76,76,76,76,
    /*19*/  25,34,34,34,34,48,76,49,48,76,49,12,12,43,42,12,12,48,76,49,48,76,49,34,34,34,34,24,
    /*20*/  27,76,76,76,76,76,76,76,76,76,76,76,76,54,55,76,76,76,76,76,76,76,76,76,76,76,76,26,
    /*21*/  27,76,15,38,38,14,76,15,38,38,38,14,76,54,55,76,15,38,38,38,14,76,15,38,38,14,76,26,
    /*22**/ 27,76,49,12,43,16,76,49,12,12,12,18,76,19,18,76,49,12,12,12,18,76,17,42,12,18,76,26, 
    /*23*/  27,76,76,76,54,55,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,54,55,76,76,76,26,
    /*24**/ 31,38,14,76,54,55,76,15,14,76,15,38,38,38,38,38,38,14,76,15,14,76,54,55,76,15,38,30,
    /*25**/ 33,12,48,76,49,48,76,54,55,76,49,12,12,43,42,12,12,48,76,54,55,76,49,48,76,49,12,32,
    /*26**/ 27,76,76,76,76,76,76,54,55,76,76,76,76,54,55,76,76,76,76,54,55,76,76,76,76,76,76,26, 
    /*27**/ 27,76,15,38,38,38,38,45,44,38,38,14,76,54,55,76,15,38,38,45,44,38,38,38,38,14,76,26,
    /*28**/ 27,76,19,12,12,12,12,12,12,12,12,18,76,19,18,76,19,12,12,12,12,12,12,12,12,18,76,26,
    /*29*/  27,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,76,26,
    /*30*/  29,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,28,


















    ];
}