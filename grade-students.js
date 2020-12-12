let note = [];
   let notesRound = 0;
   for (let i=0; i< grades.length; i++) {
        if (grades[i]< 38) {
            note.push (grades[i]);
        }
        if (38 <= grades [i] <= 40){
            note.push(40);
        }
        if(grades[i]>40) {
            if (grades[i]%5>2) {
               notesRound = ((Math.floor(grades[i]/5))*5)+5;
               note.push (notesRound);
            }else{
            note.push(grades[i]);
            }
        }
    }
    return note;

