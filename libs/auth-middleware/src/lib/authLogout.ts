async function handleLogout(req, res) {
  res.redirect(
    `https://${process.env['COGNITO_DOMAIN']}/logout?client_id=${process.env['COGNITO_CLIENT_ID']}&logout_uri=${process.env['COGNITO_REDIRECT_URI']}`,
  );
}

export async function logout(req, res) {
  try {
    await handleLogout(req, res);
  } catch (error: any) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
