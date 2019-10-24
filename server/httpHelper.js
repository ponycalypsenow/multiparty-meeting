function httpHelper(data)
{
	const html = `<!DOCTYPE html>
	<html>
		<head>
			<meta charset='utf-8'>
			<title>Multiparty Meeting</title>
		</head>
		<body>
			<script type='text/javascript'>
				let data = ${JSON.stringify(data)};
	
				window.opener.CLIENT.receiveFromChildWindow(data);
	
				window.close();
			</script>
		</body>
	</html>`;

	return html;
}

module.exports = httpHelper;