function GridCtrl($scope) {
    var SIZE = 6;
    $scope.board = [];
    for(var i = 0; i<SIZE; i++) {
        var row = [];
        for (var j=0; j<SIZE; j++) {
            row.push({x:i, y:j})
        }
        $scope.board.push(row);
    }
}