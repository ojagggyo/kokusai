function makeCalendar()	{
//�e���̓�����z��ɂ���
var monthDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31)

//�����̓�����ϐ�nowDays�ɓ����
today = new Date()
var nowDays = monthDays[today.getMonth()]

//�����̓��t��ϐ�thisDay�ɓ����
var thisDay = today.getDate()

//���邤�N�̌v�Z(����Ȃ�ʂ��ł��B���邤�N���Ă�������ċ��߂�̂�!?)
//����1��"�����4�Ŋ������]�肪0�ł���"�@���@"�����100�Ŋ������]�肪0�łȂ�"
//����2��"�����100�Ŋ������]�肪0�ł���"
//"����1"���邢��"����2"���^(true)�Ȃ�AmonthDays[1]�A�܂�2���̓�����29�ɂ���
//�Ƃ������Ƃł��B
var year = today.getYear()
if(year <1000){
  year = year + 1900
}
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))	{
	monthDays[1] = 29
	//nowDays = nowDays + 1;
}

//�����̑����ڂ�Day(�j���̐��l)��ϐ�startDay�ɓ����
firstday = new Date()
firstday.setDate(1)
var startDay = firstday.getDay()

//�\�̋L�q��ϐ�content�ɓ���n�߂�(�Ȃ��Ă��\�������邩��</TD>��</TR>�͏Ȃ��Ă���B)
var content = "";
content = content+"<A>"+year+"�N"+(today.getMonth()+1)+"��</A>";
content = content+"<TABLE BORDER='0' CELLSPACING='0' CELLPADDING='1'><TR><TD><FONT COLOR='red'>��</FONT></TD><TD>��</TD><TD>��</TD><TD>��</TD><TD>��</TD><TD>��</TD><TD><FONT COLOR='blue'>�y</FONT></TD></TR>"

//startDay�̒l�A�܂荡���̍ŏ��̗j���������������󔒃Z����}��
var column = 0
for(i = 0 ; i < startDay ; i++)	{
	content += "<TD>�@"
	column++
}

//�J�����_�[�̖{�̂�content�ɒǉ�����Bcolumn�̒l�͑O�̋L�q����󂯌p��
//column��7�ɂȂ�����<TR>��content�ɒǉ����Ă���
for(i = 1 ; i <= nowDays ; i++)	{

	//�����̓��t�����w�i�F��ς���
	if(i == thisDay)	{
		content += "<TD BGCOLOR='yellow'>" + i
		column++

	//�����̓��t�ȊO�͂�������ʂ�
	} else	{
	content += "<TD>" + i
	column++
	}

	//�ϐ�column��7�ɂȂ�����ϐ�content��<TR>��ǉ�����column��0�ɖ߂�
	if(column == 7)	{
		content += "<TR>"
		column = 0
	}
}
content += "</TABLE>"

//�ϐ�content�A�܂�\�̃^�O�������o��
document.write(content)
}

