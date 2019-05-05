<?php
	// load in mailchimp library
	include('./MailChimp.php');

	// namespace defined in MailChimp.php
	use \DrewM\MailChimp\MailChimp;

	// connect to mailchimp
	$MailChimp = new MailChimp('7492d1b3bc647a74589b46bdd5f85bc1-us20'); // put your API key here
	$list = '63743c33af'; // put your list ID here
	$email = $_GET['EMAIL']; // Get email address from form
	$id = md5(strtolower($email)); // Encrypt the email address
	// setup th merge fields
	$mergeFields = array(
		// *** YOUR FIELDS GO HERE ***
    'NAME'=>$_GET['FNAME'],
    'EMAIL' => $_GET['EMAIL'],
    'COMMENT'=>$_GET['COMMENT'],
		);
	// remove empty merge fields
	$mergeFields = array_filter($mergeFields);
	$result = $MailChimp->put("lists/$list/members/$id", array(
									'email_address'     => $email,
									'status'            => 'subscribed',
									'merge_fields'      => $mergeFields,
									'update_existing'   => true, // YES, update old subscribers!
							));
	echo json_encode($result);
