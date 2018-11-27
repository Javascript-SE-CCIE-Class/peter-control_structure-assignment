var marks = 0;
if((marks>=0) && (marks<30)){
    document.write("FF");
}
else if((marks>=30) && (marks<40)){
    document.write("DD grade");
}
else if((marks>=40) && (marks<50)){
    document.write("CD grade");
}
else if((marks>=50) && (marks<60)){
    document.write("CC grade");
}
else if((marks>=60) && (marks<=70)){
    document.write("BC grade");
}
else if((marks>=70) && (marks<=80)){
    document.write("BB grade");
}else if((marks>=80) && (marks<=90)){
    document.write("AB grade");
}else if((marks>=90) && (marks<=100)){
    document.write("AA grade");
}
else{
    document.write("YY");
}