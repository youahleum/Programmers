function solution(s) {
    let num=s
   
    
    // if(s.includes('zero')){
    //     console.log(true)
    //     s.replace('zero','0')
    // }
    // if(s.includes('one')){
    //     s.replace('one','1')
    // }
    //const regex=/[^0-9]/g;
  
    num=num.replace(/zero/gi,'0') 

    num=num.replace(/one/gi,'1')

    num=num.replace(/two/gi,'2')

    num=num.replace(/three/gi,'3')

    num=num.replace(/four/gi,'4')

    num=num.replace(/five/gi,'5')

    num=num.replace(/six/gi,'6')

    num=num.replace(/seven/gi,'7')

    num=num.replace(/eight/gi,'8')

    num=num.replace(/nine/gi,'9')
    
    console.log(num)
    var answer = parseInt(num);
    return answer;
}