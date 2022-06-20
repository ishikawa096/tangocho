import React, { useState, useContext } from "react"
import { useHistory, Link } from "react-router-dom"
import Cookies from "js-cookie"

import { styled } from '@mui/material/styles';
import { css, Theme, useTheme } from "@mui/material/styles";
import Button from '@mui/material/Button';
import createTheme from "@mui/material/createTheme";
import ThemeProvider from "@mui/material/ThemeProvider";
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Box from "@mui/material/Box"

// import { makeStyles, Theme } from "@material-ui/core/styles"

// import { AuthContext } from "App"
// import AlertMessage from "components/utils/AlertMessage"
// import { signIn } from "lib/api/auth"
// import { SignInParams } from "interfaces/index"

// const useStyles = makeStyles((theme: Theme) => ({
//   container: {
//     marginTop: theme.spacing(6)
//   },
//   submitBtn: {
//     marginTop: theme.spacing(2),
//     flexGrow: 1,
//     textTransform: "none"
//   },
//   header: {
//     textAlign: "center"
//   },
//   card: {
//     padding: theme.spacing(2),
//     maxWidth: 400
//   },
//   box: {
//     marginTop: "2rem"
//   },
//   link: {
//     textDecoration: "none"
//   }
// }))

// サインイン用ページ
const SignInForm: React.FC = () => {
  // const classes = useStyles()
  // const history = useHistory()

  // const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // const params: SignInParams = {
    //   email: email,
    //   password: password
    // }

  //   try {
  //     const res = await signIn(params)
  //     console.log(res)

  //     if (res.status === 200) {
  //       // ログインに成功した場合はCookieに各値を格納
  //       Cookies.set("_access_token", res.headers["access-token"])
  //       Cookies.set("_client", res.headers["client"])
  //       Cookies.set("_uid", res.headers["uid"])

  //       setIsSignedIn(true)
  //       setCurrentUser(res.data.data)

  //       history.push("/")

  //       console.log("Signed in successfully!")
  //     } else {
  //       setAlertMessageOpen(true)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //     setAlertMessageOpen(true)
  //   }
  }

  return (
    <>
      <form noValidate autoComplete="off">
        <Card className='{classes.card}'>
          <CardHeader className='{classes.header}' title="サインイン" />
          <CardContent>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Email"
              value={email}
              margin="dense"
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="パスワード"
              type="password"
              placeholder="At least 6 characters"
              value={password}
              margin="dense"
              autoComplete="current-password"
              onChange={event => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              color="primary"
              disabled={!email || !password ? true : false} // 空欄があった場合はボタンを押せないように
              className='{classes.submitBtn}'
              onClick={handleSubmit}
            >
              サインイン
            </Button>
            <Box textAlign="center" className='{classes.box}'>
              <Typography variant="body2">
                アカウントをお持ちでない方は
                <Link to="/signup" className='{classes.link}'>
                  サインアップ
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </form>
      {/* <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="Invalid emai or password"
      /> */}
    </>
  )
}

export default SignInForm
