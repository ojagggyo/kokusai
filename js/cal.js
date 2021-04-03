function makeCalendar()	{
//各月の日数を配列にする
var monthDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31)

//今月の日数を変数nowDaysに入れる
today = new Date()
var nowDays = monthDays[today.getMonth()]

//今日の日付を変数thisDayに入れる
var thisDay = today.getDate()

//うるう年の計算(たんなる写しです。うるう年ってこうやって求めるのね!?)
//条件1＝"西暦を4で割った余りが0である"　かつ　"西暦を100で割った余りが0でない"
//条件2＝"西暦を100で割った余りが0である"
//"条件1"あるいは"条件2"が真(true)なら、monthDays[1]、つまり2月の日数を29にする
//ということです。
var year = today.getYear()
if(year <1000){
  year = year + 1900
}
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))	{
	monthDays[1] = 29
	//nowDays = nowDays + 1;
}

//今月の第一日目のDay(曜日の数値)を変数startDayに入れる
firstday = new Date()
firstday.setDate(1)
var startDay = firstday.getDay()

//表の記述を変数contentに入れ始める(省いても表を書けるから</TD>や</TR>は省いている。)
var content = "";
content = content+"<A>"+year+"年"+(today.getMonth()+1)+"月</A>";
content = content+"<TABLE BORDER='0' CELLSPACING='0' CELLPADDING='1'><TR><TD><FONT COLOR='red'>日</FONT></TD><TD>月</TD><TD>火</TD><TD>水</TD><TD>木</TD><TD>金</TD><TD><FONT COLOR='blue'>土</FONT></TD></TR>"

//startDayの値、つまり今月の最初の曜日を示す数だけ空白セルを挿入
var column = 0
for(i = 0 ; i < startDay ; i++)	{
	content += "<TD>　"
	column++
}

//カレンダーの本体をcontentに追加する。columnの値は前の記述から受け継ぐ
//columnが7になったら<TR>をcontentに追加している
for(i = 1 ; i <= nowDays ; i++)	{

	//今日の日付だけ背景色を変える
	if(i == thisDay)	{
		content += "<TD BGCOLOR='yellow'>" + i
		column++

	//今日の日付以外はこっちを通る
	} else	{
	content += "<TD>" + i
	column++
	}

	//変数columnが7になったら変数contentに<TR>を追加してcolumnを0に戻す
	if(column == 7)	{
		content += "<TR>"
		column = 0
	}
}
content += "</TABLE>"

//変数content、つまり表のタグを書き出す
document.write(content)
}

