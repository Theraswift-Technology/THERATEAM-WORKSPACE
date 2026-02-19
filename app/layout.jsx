import '../src/index.css';
import '../src/styles/LandingPage.css';
import '../src/styles/LoginPage.css';
import '../src/styles/CreateAccountPage.css';
import '../src/styles/ForgotPasswordPage.css';
import '../src/styles/QuestionPage.css';

export const metadata = {
    title: 'TheraTeam',
    description: 'TheraTeam Application',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
