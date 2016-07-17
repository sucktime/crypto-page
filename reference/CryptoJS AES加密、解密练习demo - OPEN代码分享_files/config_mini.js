/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.stylesSet.add( 'code_style', [
// Block-level styles
{ name: 'javascript', element: 'code', styles: { } },
{ name: 'python', element: 'code', styles: { } }

]);
CKEDITOR.editorConfig = function( config ) {
    config.toolbar = [
        [
          
            'Bold', 'Italic', 'Underline', 'Strike','TextColor', 'BGColor',
           'NumberedList', 'BulletedList', 'Blockquote',
            'Link', 'Unlink', 'Image','CodeSnippet'
        ]
    ];
    config.resize_maxWidth = 775;
    //config.removePlugins = 'elementspath';//ȥ���ı����������body p ��
    config.removeDialogTabs = 'image:advanced';
    config.extraPlugins = "lineutils,widget,codesnippet,h2,h3"; //ע���Զ��尴ť
    //http://docs.ckeditor.com/#!/guide/dev_codesnippet

    // ���з�ʽ
    //config.enterMode = CKEDITOR.ENTER_BR;

    // �����룺shift+Enter�ǲ���ı�ǩ
    config.shiftEnterMode = CKEDITOR.ENTER_BR;//
    //ͼƬ����
    config.pasteFromWordRemoveStyles = true;
	ImageUploadUrl = ImageUploadUrl || "";
    config.filebrowserImageUploadUrl = ImageUploadUrl;
    //config.allowedContent = "code(*),pre";
    config.stylesSet = 'code_style';
    //config.codeSnippet_codeClass = 'myCustomClass';

    config.skin = "flat";
    config.tabIndex = 4;

    config.disallowedContent = 'a[target];img{width,height,border*}';
//Source =Դ��ģʽ Save =����(�ύ��)NewPage =�½�Preview =Ԥ��- =�ָ�s��Templates =ģ��
//Cut =����Copy =����Paste =ճ��PasteText =ճ��Ϊ�޸�ʽ�ı�PasteFromWord =�� MS WORDճ��-Print =��ӡ
// SpellChecker =ƴд���Scayt =��ʱƴд���Undo =����Redo =����-Find =����Replace =�滻-SelectAll =ȫѡRemoveFormat =�����ʽ
//Form =��Checkbox =��ѡ��Radio =��ѡ��TextField =�����ı�Textarea =�����ı�Select =�б�/�˵�Button =��ť
// ImageButton =ͼƬ��ťHiddenField =������/Bold =�Ӵ�Italic =��бUnderline =�»���Strike =ɾ����-Subscript =�±�Superscript =�ϱ�
//NumberedList =����б�BulletedList =��Ŀ�б�-Outdent =����������Indent =����������Blockquote =������CreateDiv =����DIV����
// JustifyLeft =�����JustifyCenter =����JustifyRight =�Ҷ���JustifyBlock =���˶���BidiLtr =���ַ��������BidiRtl =���ַ�����ҵ���
//Link =����/�༭������(�ϴ��ļ�)Unlink =ȡ��������Anchor =����/�༭ê������Image =ͼ��(�ϴ�)Flash =����(�ϴ�)Table =���HorizontalRule =����ˮƽ��Smiley =�������
//SpecialChar =�����������PageBreak =�����ҳ��/Styles =��ʽ��ݷ�ʽFormat =�ı���ʽFont =����FontSize =���ִ�С
// TextColor =������ɫBGColor =������ɫ Maximize =ȫ���༭ģʽ ShowBlocks =��ʾ����-About =��ʾ����
};
