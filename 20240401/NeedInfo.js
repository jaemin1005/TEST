let bPostive = null;
var leftTextBlock = document.getElementById('PositiveLabelBox');
var rightTextBlock = document.getElementById('NegativeLabelBox');

function EnterKeyUp()
{
    let key = window.event.key || window.event.keyCode;
    if((key === 'Enter' || key === 13) && bPostive != null )
    {
        EnterKeyUpCallback();
    }
}


function EnterKeyUpCallback()
{
    let selectTextBlock = bPostive == true ? document.getElementById('PositiveLabelBox') : document.getElementById('NegativeLabelBox');
    let inputText = document.getElementById('Input').value;

    if(inputText.length > 0)
    {
        selectTextBlock.append(inputText,document.createElement('br'));
    }
}


function RadioButtonOnClick(bValue)
{
    bValue == true ? bPostive = true : bPostive = false;
    console.log(bPostive);
}
