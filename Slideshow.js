//Read from the .csv file "CMS"
function readQuestions(){
    var data;
    db = 'questions.csv'
    Papa.parse(db, {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: function(results) {
        data = results.data;

        N = data.length;
        i = Math.floor(Math.random()*N);

        ChangeQuestion(data[i]['question'],data[i]['link'])
      }
    });
  }
  
  //Changes the question of it 
  function ChangeQuestion(question,link) {
    console.log(link);
    var a = '<a href = "'+link+'">' + question + '</a>';
    document.getElementById("question").style.opacity = 0;
    setTimeout(() => { 
        document.getElementById("question").innerHTML = a;
        document.getElementById("question").style.opacity = 1;
    }, 2000);
    
       
  }
  
  setInterval(readQuestions, 10000)


window.onload = addContents;

function addContents(){
    file = 'questions.csv';
    number = 10;
    var data;
    Papa.parse(file, {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: function(results) {
        data = results.data;

        N = data.length;

        if (N<number){
            number = N;
        }

        for (i=0;i<number;i++){
            document.getElementById('contents').innerHTML 
            += '<p><a href = "'+data[i]['link']+'">' + data[i]['question'] + '</a></p>';
        }
      }
    });
}