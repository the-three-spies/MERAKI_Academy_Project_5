const nodemailer = require('nodemailer');
const sendInvitationEmail=(req,res)=>
{
   const date=req.body.date;
console.log(req.body.email)
console.log(date)
   const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
    type: "service_account",
    user:'fitratinsancommunity@gmail.com',
        pass: 'kxiyntfwdihpovlt ',

}
  });

 const mailOptions = {
    
    from:` Fitrat Insan App <fitratinsancommunity@gmail.com>`,// Sender address
    to: req.body.email, // List of recipients
    subject: 'Invitation For Donation Day Event', // Subject line
  html:`<!DOCTYPE html>
  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <title></title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Alegreya" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Shrikhand" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Quattrocento" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet" type="text/css"/>
  <!--<![endif]-->
  <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
  
          p {
              line-height: inherit
          }
  
          .desktop_hide,
          .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
          }
  
          .menu_block.desktop_hide .menu-links span {
              mso-hide: all;
          }
  
          @media (max-width:695px) {
              .social_block.desktop_hide .social-table {
                  display: inline-block !important;
              }
  
              .fullMobileWidth,
              .image_block img.big,
              .row-content {
                  width: 100% !important;
              }
  
              .menu-checkbox[type=checkbox]~.menu-links {
                  display: none !important;
                  padding: 5px 0;
              }
  
              .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
                  display: none !important;
              }
  
              .menu-checkbox[type=checkbox]:checked~.menu-links,
              .menu-checkbox[type=checkbox]~.menu-trigger {
                  display: block !important;
                  max-width: none !important;
                  max-height: none !important;
                  font-size: inherit !important;
              }
  
              .menu-checkbox[type=checkbox]~.menu-links>a,
              .menu-checkbox[type=checkbox]~.menu-links>span.label {
                  display: block !important;
                  text-align: center;
              }
  
              .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
                  display: block !important;
              }
  
              .mobile_hide {
                  display: none;
              }
  
              .stack .column {
                  width: 100%;
                  display: block;
              }
  
              .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
              }
  
              .desktop_hide,
              .desktop_hide table {
                  display: table !important;
                  max-height: none !important;
              }
          }
  
          #memu-r0c0m4:checked~.menu-links {
              background-color: #e27c3a !important;
          }
  
          #memu-r0c0m4:checked~.menu-links a,
          #memu-r0c0m4:checked~.menu-links span {
              color: #ffffff !important;
          }
      </style>
  </head>
  <body style="background-color: #fff5eb; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff5eb;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 675px;" width="675">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
  <div align="center" class="alignment" style="line-height:10px"><a href="www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="topheader" class="big" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668205148/top-header_uxfeo9.png" style="display: block; height: auto; border: 0; width: 675px; max-width: 100%;" title="topheader" width="675"/></a></div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="padding-left:20px;width:100%;padding-right:0px;padding-top:20px;">
  <div align="center" class="alignment" style="line-height:10px"><a href="http://www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="your-ogo" class="big" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668205102/1234_aeyybk.png" style="display: block; height: auto; border: 0; width: 371px; max-width: 100%;" title="your-ogo" width="371"/></a></div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="menu_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="color:#1a1a1a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:13px;letter-spacing:1px;text-align:center;padding-top:20px;">
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="alignment" style="text-align:center;font-size:0px;">
  <!--[if !mso]><!--><input class="menu-checkbox" id="memu-r0c0m4" style="display:none !important;max-height:0;visibility:hidden;" type="checkbox"/>
  <!--<![endif]-->
  <div class="menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label class="menu-label" for="memu-r0c0m4" style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: center; text-align: center; color: #ffffff; text-decoration: none; background-color: #e27c3a; border-radius: 50%;"><span class="menu-open" style="mso-hide:all;font-size:26px;line-height:36px;">☰</span><span class="menu-close" style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label></div>
  <div class="menu-links">
  <!--[if mso]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="">
  <tr>
  <td style="padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:5px">
  <![endif]--><a href="http://www.example.com" style="padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px;display:inline-block;color:#1a1a1a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:13px;text-decoration:none;letter-spacing:1px;">CONTACT</a>
  <!--[if mso]></td><td style="padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:5px"><![endif]--><a href="http://www.example.com" style="padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px;display:inline-block;color:#1a1a1a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:13px;text-decoration:none;letter-spacing:1px;">AGENDA</a>
  <!--[if mso]></td><td style="padding-top:10px;padding-right:5px;padding-bottom:10px;padding-left:5px"><![endif]--><a href="http://www.example.com" style="padding-top:10px;padding-bottom:10px;padding-left:5px;padding-right:5px;display:inline-block;color:#1a1a1a;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:13px;text-decoration:none;letter-spacing:1px;"> SCHEDULE</a>
  <!--[if mso]></td></tr></table><![endif]-->
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 675px;" width="675">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="text-align:center;width:100%;padding-top:30px;">
  <h1 style="margin: 0; color: #e27c3a; direction: ltr; font-family: Georgia, Times, 'Times New Roman', serif; font-size: 38px; font-weight: 400; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">DONATION DAY</span></h1>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="text-align:center;width:100%;padding-top:15px;">
  <h1 style="margin: 0; color: #1a1a1a; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 23px; font-weight: 400; letter-spacing: 2px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">- IS COMING -</span></h1>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 675px;" width="675">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="padding-left:10px;padding-right:10px;width:100%;">
  <div align="center" class="alignment" style="line-height:10px"><a href="http://www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="Thanksgiving-image" class="fullMobileWidth" src="https://cdn.templates.unlayer.com/assets/1664262783507-image.png" style="display: block; height: auto; border: 0; width: 655px; max-width: 100%;" title="Thanksgiving-image" width="655"/></a></div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="text-align:center;width:100%;padding-top:15px;">
  <h1 style="margin: 0; color: #e27c3a; direction: ltr; font-family: Georgia, Times, 'Times New Roman', serif; font-size: 27px; font-weight: 400; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Every act of generosity is important and Everyone has something to give.</span></h1>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: Arial, sans-serif">
  <div class="" style="font-size: 14px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 28px; color: #1a1a1a; line-height: 2;">
  <p style="margin: 0; mso-line-height-alt: 28px; letter-spacing: normal;">We thank you from our hearts for your continuous support, and we would like to invite you to the charity fundraising ceremony that will be held at our permanent headquarters in Sweifieh.</p>
  <p style="margin: 0; text-align: center; mso-line-height-alt: 28px; letter-spacing: normal;"> Our event will be at ${date}</p>
  <p style="margin: 0; font-size: 18px; text-align: center; mso-line-height-alt: 28px; letter-spacing: normal;"> </p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="button_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;text-align:center;">
  <div align="center" class="alignment">
  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:42px;width:197px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#e27c3a"><w:anchorlock/><v:textbox inset="5px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="http://www.example.com" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#e27c3a;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:50px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;"><strong>JOIN WITH US</strong></span></span></a>
  <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:5px;width:100%;">
  <div align="center" class="alignment" style="line-height:10px"><a href="http://www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="Flight-image" class="fullMobileWidth" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668205254/project5/Give-back_fg14vc.png" style="display: block; height: auto; border: 0; width: 655px; max-width: 100%;" title="Flight-image" width="655"/></a></div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 675px;" width="675">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;"> </div>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 675px;" width="675">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="text-align:center;width:100%;">
  <h1 style="margin: 0; color: #e27c3a; direction: ltr; font-family: Georgia, Times, 'Times New Roman', serif; font-size: 27px; font-weight: 400; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">YOU CAN DONATE</span></h1>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; text-align: center; mso-line-height-alt: 18px; color: #1a1a1a; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;"><strong>#ANYTHING</strong>
  <p style="margin: 0; font-size: 12px; mso-line-height-alt: 18px; letter-spacing: normal;"> </p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 675px;" width="675">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 10px; padding-right: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:10px;">
  <div align="center" class="alignment" style="line-height:10px"><a href="http://www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="ITALY" class="fullMobileWidth" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668205325/project5/pexels-liza-summer-6347738_rldy6n.jpg" style="display: block; height: auto; border: 0; width: 205px; max-width: 100%;" title="ITALY" width="205"/></a></div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:5px;padding-top:10px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; mso-line-height-alt: 24px; color: #e27c3a; line-height: 2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
  <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 40px;"><span style="font-size:20px;"><strong><span style="">MONEY</span></strong></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; mso-line-height-alt: 21.6px; color: #1a1a1a; line-height: 1.8; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
  <p style="margin: 0; font-size: 12px; mso-line-height-alt: 21.6px;">You can donate a small portion of your money and it will make a big difference in the lives of others</p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 10px; padding-right: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:10px;">
  <div align="center" class="alignment" style="line-height:10px"><a href="http://www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="NEW-YORK" class="fullMobileWidth" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668205367/project5/pexels-antoni-shkraba-7345399_vdkzqw.jpg" style="display: block; height: auto; border: 0; width: 205px; max-width: 100%;" title="NEW-YORK" width="205"/></a></div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:5px;padding-top:10px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; mso-line-height-alt: 24px; color: #e27c3a; line-height: 2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
  <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 40px;"><span style="font-size:20px;"><strong><span style="">CLOTHES</span></strong></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; mso-line-height-alt: 21.6px; color: #1a1a1a; line-height: 1.8; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
  <p style="margin: 0; font-size: 12px; mso-line-height-alt: 21.6px;">You can donate Extra meals from your happy occasions of your money and it will make a big difference in the lives of others.</p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 10px; padding-right: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:10px;">
  <div align="center" class="alignment" style="line-height:10px"><a href="http://www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="BARCELLONA" class="fullMobileWidth" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668205412/project5/pexels-antoni-shkraba-7345396_i2vvgl.jpg" style="display: block; height: auto; border: 0; width: 205px; max-width: 100%;" title="BARCELLONA" width="205"/></a></div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:5px;padding-top:10px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; mso-line-height-alt: 24px; color: #e27c3a; line-height: 2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
  <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 40px;"><span style="font-size:20px;"><strong><span style="">FOOD</span></strong></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:10px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; mso-line-height-alt: 21.6px; color: #1a1a1a; line-height: 1.8; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
  <p style="margin: 0; font-size: 12px; mso-line-height-alt: 21.6px;">You can donate  your clothes and it will make a big difference in the lives of others</p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 675px;" width="675">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:25px;width:100%;">
  <div align="center" class="alignment" style="line-height:10px"><a href="http://www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="Flight-image" class="fullMobileWidth" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668206626/project5/ARROW_1_xqg2ec.png" style="display: block; height: auto; border: 0; width: 304px; max-width: 100%;" title="Flight-image" width="304"/></a></div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 675px;" width="675">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
  <div class="spacer_block" style="height:5px;line-height:5px;font-size:1px;"> </div>
  <div class="spacer_block mobile_hide" style="height:20px;line-height:20px;font-size:1px;"> </div>
  <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="text-align:center;width:100%;">
  <h1 style="margin: 0; color: #e27c3a; direction: ltr; font-family: Georgia, Times, 'Times New Roman', serif; font-size: 41px; font-weight: 400; letter-spacing: 1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">BE WITH US</span></h1>
  </td>
  </tr>
  </table>
  <div class="spacer_block mobile_hide" style="height:10px;line-height:10px;font-size:1px;"> </div>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 14px; mso-line-height-alt: 21px; color: #1a1a1a; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
  <p style="margin: 0; font-size: 18px; text-align: center; mso-line-height-alt: 27px; letter-spacing: normal;"><span style="font-size:18px;">We are waiting for you all. We will be very happy to come and participate in drawing smiles on the faces of others</span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="button_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:15px;text-align:center;">
  <div align="center" class="alignment">
  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:42px;width:222px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#e27c3a"><w:anchorlock/><v:textbox inset="5px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="http://www.example.com" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#e27c3a;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:50px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;"><strong>OUR LOCATION</strong></span></span></a>
  <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
  </div>
  </td>
  </tr>
  </table>
  </td>
  <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:5px;padding-bottom:40px;">
  <div align="center" class="alignment" style="line-height:10px"><img alt="safetravel" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668206676/project5/donation-toys-clothes-1_fckttm.webp" style="display: block; height: auto; border: 0; width: 338px; max-width: 100%;" title="safetravel" width="338"/></div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 675px;" width="675">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;"> </div>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff5eb;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff5eb; color: #000000; width: 675px;" width="675">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="41.666666666666664%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:40px;">
  <div align="center" class="alignment" style="line-height:10px"><img alt="Your Logo" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668206737/project5/1234-removebg-preview_osxcea.png" style="display: block; height: auto; border: 0; width: 281px; max-width: 100%;" title="Your Logo" width="281"/></div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="social_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:30px;text-align:center;">
  <div class="alignment" style="text-align:center;">
  <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="168px">
  <tr>
  <td style="padding:0 5px 0 5px;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668205484/project5/facebook2x_uccyei.png" style="display: block; height: auto; border: 0;" title="facebook" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="https://www.twitter.com/" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668205516/project5/twitter2x_dnrpkz.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/" target="_blank"><img alt="Linkedin" height="32" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668205531/project5/linkedin2x_p0vgoj.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="https://www.instagram.com/" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668205524/project5/instagram2x_oppbc4.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
  </tr>
  </table>
  </div>
  </td>
  </tr>
  </table>
  </td>
  <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="25%">
  <table border="0" cellpadding="0" cellspacing="0" class="menu_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="color:#1a1a1a;font-family:inherit;font-size:12px;letter-spacing:2px;padding-bottom:15px;padding-right:20px;padding-top:50px;text-align:center;">
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="alignment" style="text-align:center;font-size:0px;">
  <div class="menu-links">
  <!--[if mso]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="">
  <tr>
  <td style="padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:20px">
  <![endif]--><a href="www.example.com" style="padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;display:block;color:#1a1a1a;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;text-decoration:none;letter-spacing:2px;"> SCHEDULE</a>
  <!--[if mso]></td></tr><tr><td style="text-align:center;padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:20px"><![endif]--><a href="www.example.com" style="padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;display:block;color:#1a1a1a;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;text-decoration:none;letter-spacing:2px;">AGENDA</a>
  <!--[if mso]></td></tr><tr><td style="text-align:center;padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:20px"><![endif]--><a href="www.example.com" style="padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;display:block;color:#1a1a1a;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;text-decoration:none;letter-spacing:2px;">CONTACTS</a>
  <!--[if mso]></td></tr><tr><td style="text-align:center;padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:20px"><![endif]--><a href="www.example.com" style="padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;display:block;color:#1a1a1a;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:12px;text-decoration:none;letter-spacing:2px;">FAQ</a>
  <!--[if mso]></td></tr></table><![endif]-->
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:50px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; text-align: right; mso-line-height-alt: 14.399999999999999px; color: #1a1a1a; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
  <p style="margin: 0; text-align: center; mso-line-height-alt: 14.399999999999999px;"><span style="font-size:14px;"><strong>Where to find us</strong></span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:10px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; text-align: right; mso-line-height-alt: 14.399999999999999px; color: #1a1a1a; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
  <p style="margin: 0; text-align: center; mso-line-height-alt: 14.399999999999999px;">Company address here<br/>Amman. Sweifieh.</p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="text_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:20px;padding-left:25px;padding-right:10px;padding-top:20px;">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; text-align: right; mso-line-height-alt: 14.399999999999999px; color: #1a1a1a; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
  <p style="margin: 0; text-align: center; mso-line-height-alt: 14.399999999999999px;"><span style="font-size:12px;">Changed your mind? <a href="http://www.example.com" rel="noopener" style="text-decoration: underline; color: #1a1a1a;" target="_blank">Unsubscribe</a> </span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 675px;" width="675">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <div class="spacer_block" style="height:10px;line-height:10px;font-size:1px;"> </div>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table><!-- End -->
  </body>
  </html>
  `
};

transport.sendMail(mailOptions, function(err, info) {
   if (err) {
     console.log(err)
     res.json(err)
   } else {
     console.log(info);
     res.json('email sent')
   }
});


}
const registerEmail=(req,res)=>
{

    const email=req.body.email;
    const firstName=req.body.firstName;
   const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
    type: "service_account",
    user:'lahlobaservices@gmail.com',
        pass: 'mudorzciireuuwyo',
  client_email: "lahlobaservices@my-project-12263-364518.iam.gserviceaccount.com",
  client_id: "103566074982747079010",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/lahlobaservices%40my-project-12263-364518.iam.gserviceaccount.com"
}
  });

 const mailOptions = {
    
    from:` Lahloba App <lahlobaservices@gmail.com>`,// Sender address
    to: email, // List of recipients
    subject: 'Thanks for Registration lahloba app', // Subject line
  html:`<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>
    
      <style type="text/css">
        @media only screen and (min-width: 620px) {
    .u-row {
      width: 600px !important;
    }
    .u-row .u-col {
      vertical-align: top;
    }
  
    .u-row .u-col-100 {
      width: 600px !important;
    }
  
  }
  
  @media (max-width: 620px) {
    .u-row-container {
      max-width: 100% !important;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .u-row .u-col {
      min-width: 320px !important;
      max-width: 100% !important;
      display: block !important;
    }
    .u-row {
      width: calc(100% - 40px) !important;
    }
    .u-col {
      width: 100% !important;
    }
    .u-col > div {
      margin: 0 auto;
    }
  }
  body {
    margin: 0;
    padding: 0;
  }
  
  table,
  tr,
  td {
    vertical-align: top;
    border-collapse: collapse;
  }
  
  p {
    margin: 0;
  }
  
  .ie-container table,
  .mso-container table {
    table-layout: fixed;
  }
  
  * {
    line-height: inherit;
  }
  
  a[x-apple-data-detectors='true'] {
    color: inherit !important;
    text-decoration: none !important;
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
  }
  
  table, td { color: #000000; } #u_body a { color: #e60b63; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 54% !important; } #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 91% !important; } #u_content_heading_2 .v-container-padding-padding { padding: 35px 15px !important; } #u_content_button_1 .v-size-width { width: 92% !important; } #u_content_text_2 .v-container-padding-padding { padding: 10px 20px 70px !important; } }
      </style>
    
    
  
  <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
  
  </head>
  
  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f5f5f5;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f5f5f5;width:100%" cellpadding="0" cellspacing="0">
    <tbody>
    <tr style="vertical-align: top">
      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f5f5f5;"><![endif]-->
      
  
  <div class="u-row-container" style="padding: 0px;background-color: #e60b63">
    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #e60b63;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;">
    <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
    
  <table id="u_content_image_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:35px 10px;font-family:arial,helvetica,sans-serif;" align="left">
          
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="padding-right: 0px;padding-left: 0px;" align="center">
        <a href="https://unlayer.com" target="_blank">
        <img align="center" border="0" src="https://res.cloudinary.com/dzmmijyxh/image/upload/v1664991337/my%20image/ddd_njduiy.png" alt="Logo" title="Logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 32%;max-width: 185.6px;" width="185.6" class="v-src-width v-src-max-width"/>
        </a>
      </td>
    </tr>
  </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
  
  
  
  <div class="u-row-container" style="padding: 0px;background-color: #e60b63">
    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #e60b63;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h1 style="margin: 0px; color: #171046; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Raleway',sans-serif; font-size: 49px;">
      <strong>Welcome</strong>
    </h1>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
  
  
  
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table id="u_content_image_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="padding-right: 0px;padding-left: 0px;" align="center">
        
        <img align="center" border="0" src="https://res.cloudinary.com/dzmmijyxh/image/upload/v1665148242/my%20image/1636450033923-19197947_vlx8b9.png" alt="Hero Image" title="Hero Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 51%;max-width: 295.8px;" width="295.8" class="v-src-width v-src-max-width"/>
        
      </td>
    </tr>
  </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_heading_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:35px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h3 style="margin: 0px; color: #868686; line-height: 170%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: 'Cabin',sans-serif; font-size: 23px;">
      <div>Dear ${firstName}<br />We're so grateful you've joined us.You'll be the first to hear about all of our latest services. By signing up you automatically get 10% off your next order <br /> Now you can log in and order service you need <br /><br /></div>
    </h3>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_button_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
  <div align="center">
    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://localhost:3000/signin" style="height:56px; v-text-anchor:middle; width:319px;" arcsize="2%"  stroke="f" fillcolor="#181147"><w:anchorlock/><center style="color:#ffffff;font-family:arial,helvetica,sans-serif;"><![endif]-->  
      <a href="http://localhost:3000/signin" target="_blank" class="v-button v-size-width" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #ffffff; background-color: #181147; border-radius: 1px;-webkit-border-radius: 1px; -moz-border-radius: 1px; width:55%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
        <span style="display:block;padding:16px 21px 18px 20px;line-height:120%;"><span style="font-family: Cabin, sans-serif; font-size: 18px; line-height: 21.6px;"><strong><span style="line-height: 21.6px; font-size: 18px;"><span style="line-height: 21.6px; font-size: 18px;"> Log in Your Account</span></span></strong></span></span>
      </a>
    <!--[if mso]></center></v:roundrect><![endif]-->
  </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table id="u_content_text_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 35px 70px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div style="color: #868686; line-height: 180%; text-align: left; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 180%;"><span style="font-family: Cabin, sans-serif; font-size: 16px; line-height: 28.8px;">If you have any questions. Please feel free to inform - We're always ready to help out.</span></p>
  <p style="font-size: 14px; line-height: 180%;"> </p>
  <p style="font-size: 14px; line-height: 180%;"><span style="font-family: Cabin, sans-serif; font-size: 18px; line-height: 32.4px;">Best Wishes ,</span></p>
  <p style="line-height: 180%; font-size: 14px;"><span style="font-family: Cabin, sans-serif;"><span style="font-size: 18px; line-height: 32.4px;"><strong>Lahobah Team </strong></span></span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
  
  
  
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #181147;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #181147;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:50px 10px 5px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Raleway',sans-serif; font-size: 34px;">
      <strong>Get In Touch</strong>
    </h1>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="67%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 3px solid #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
            <span>&#160;</span>
          </td>
        </tr>
      </tbody>
    </table>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px;font-family:arial,helvetica,sans-serif;" align="left">
          
  <div align="center">
    <div style="display: table; max-width:167px;">
    <!--[if (mso)|(IE)]><table width="167" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:167px;"><tr><![endif]-->
    
      
      <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
        <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <a href="https://linkedin.com/" title="LinkedIn" target="_blank">
            <img src="https://res.cloudinary.com/dzmmijyxh/image/upload/v1665149937/my%20image/image-1_w3lhz6.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
          </a>
        </td></tr>
      </tbody></table>
      <!--[if (mso)|(IE)]></td><![endif]-->
      
      <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
        <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <a href="https://twitter.com/" title="Twitter" target="_blank">
            <img src="https://res.cloudinary.com/dzmmijyxh/image/upload/v1665149945/my%20image/image-2_dn6nkj.png" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
          </a>
        </td></tr>
      </tbody></table>
      <!--[if (mso)|(IE)]></td><![endif]-->
      
      <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
        <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <a href="https://skype.com/" title="Skype" target="_blank">
            <img src="https://res.cloudinary.com/dzmmijyxh/image/upload/v1665149949/my%20image/image-3_ylnlke.png" alt="Skype" title="Skype" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
          </a>
        </td></tr>
      </tbody></table>
      <!--[if (mso)|(IE)]></td><![endif]-->
      
      <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
      <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
        <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <a href="https://instagram.com/" title="Instagram" target="_blank">
            <img src="https://res.cloudinary.com/dzmmijyxh/image/upload/v1665150625/my%20image/image-5_arylc9.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
          </a>
        </td></tr>
      </tbody></table>
      <!--[if (mso)|(IE)]></td><![endif]-->
      
      
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 30px 40px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div style="color: #ced4d9; line-height: 200%; text-align: center; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 200%;"> <br />We are the only home maintenance app</p>
  <p style="font-size: 14px; line-height: 200%;">provided service by an integrated female team</p>
  <p style="font-size: 14px; line-height: 200%;">We look forward to serving you and seeing you in your home. </p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
  
  
  
  <div class="u-row-container" style="padding: 0px;background-color: transparent">
    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f7d845;">
      <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f7d845;"><![endif]-->
        
  <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
  <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
    <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
    <!--[if (!mso)&(!IE)]><!--><div style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
    
  <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    <tbody>
      <tr>
        <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:13px 10px;font-family:arial,helvetica,sans-serif;" align="left">
          
    <div style="color: #000000; line-height: 140%; text-align: center; word-wrap: break-word;">
      <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Cabin, sans-serif; font-size: 14px; line-height: 19.6px;">© 2022lahloba All Rights Reserved.</span></p>
    </div>
  
        </td>
      </tr>
    </tbody>
  </table>
  
    <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
    </div>
  </div>
  <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
  
  
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
  
  </html>
  `
 }

  transport.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err)
      res.json(err)
    } else {
      console.log(info);
      res.json(' register email sent')
    }
 });
 

}










module.exports={sendInvitationEmail,registerEmail}
