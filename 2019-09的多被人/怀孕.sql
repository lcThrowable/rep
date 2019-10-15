

update formelement set text='投保人怀孕(周)',name='noticeinfo2' where sid='INSHnotice' and id='notice28q2';


update formelement set text='被保人1怀孕(周)',name='noticeinfo3' where sid='INSHnotice' and id='notice28q3';

update formelement set text='怀孕(周)',name='noticeinfo1' where sid='INSHnotice' and id='notice28q1';


insert into formelement (SID, ID, NAME, TEXT, TYPE, ENGLISHTEXT, CHECKBOXOPTION, GROUPID, PARENTID, NOTICEELEMENTGROUP, CSSCLASS)
values ('INSHnotice', 'notice28q4', 'noticeinfo4', '被保人2怀孕(周)', 'text', null, null, 'noticePregnancyInsu', 'notice28', 'noticeInfo', null);







