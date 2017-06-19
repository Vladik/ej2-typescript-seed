import { Button } from '@syncfusion/ej2/button';

let button: Button = new Button();
button.appendTo('#normalbtn');

button = new Button({ isPrimary: true });
button.appendTo('#primarybtn');

button = new Button({ cssClass: 'e-flat' });
button.appendTo('#flatbtn');

button = new Button({ cssClass: 'e-outline', isPrimary: true });
button.appendTo('#outlinebtn');

button = new Button({ iconCss: 'e-icons e-play-icon', cssClass: 'e-flat' });
button.appendTo('#playiconbtn');

button = new Button({ iconCss: 'e-icons e-pause-icon', cssClass: 'e-flat' });
button.appendTo('#pauseiconbtn');

button = new Button({ iconCss: 'e-icons e-open-icon', cssClass: 'e-flat', iconPosition: 'right' });
button.appendTo('#openiconbtn');

button = new Button({ cssClass: 'e-success' });
button.appendTo('#successbtn');

button = new Button({ cssClass: 'e-info' });
button.appendTo('#infobtn');

button = new Button({ cssClass: 'e-warning' });
button.appendTo('#warningbtn');

button = new Button({ cssClass: 'e-danger' });
button.appendTo('#dangerbtn');

button = new Button({ cssClass: 'e-small' });
button.appendTo('#smallbtn');
