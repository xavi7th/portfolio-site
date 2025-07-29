<?php http_response_code(500); ?>

<?php
$time_to_wait = 7200; // in seconds
$site_title = 'Dan\'s Portfolio';
$contact_link = 'https://t.me/leinad7th'; // Exemple: 'xx@xx.xx', 'https://xx.xx.xx', 'https://discord.com/invite/xxx'
$logo_path = './logo-light.png'; // Spécifiez le chemin du logo
$logo_link = 'mailto:hello@stafr.pro'; // Spécifiez le lien du logo
$facebook_link = 'https://www.facebook.com/leinad7th'; // Spécifiez le lien Facebook
$linkedin_link = 'https://www.linkedin.com/in/danielose//'; // Spécifiez le lien LinkedIn
$whatsapp_link = 'https://wa.me/2348034411661'; // Spécifiez le lien WhatsApp
$legal_info = 'Copyright (c) 2025'; // Informations légales
$redirect_url = 'https://stafr.pro'; // URL de redirection après le décompte
$gears_gif_path = 'path/to/gears.gif'; // Spécifiez le chemin du GIF des engrenages tournants
$font_color = '#fc4d22';

// Détecter le type de lien de contact
if (strpos($contact_link, '@') !== false) {
    $contact_href = 'mailto:' . $contact_link;
} elseif (strpos($contact_link, 'http') === 0) {
    $contact_href = $contact_link;
} else {
    $contact_href = 'http://' . $contact_link;
}

// Get the user's preferred languages from the Accept-Language header
$languages = explode(',', 'en,en_NG');

// Set the default language to English
$lang = 'en';

// Loop through the user's preferred languages and check if we have a translation available
foreach ($languages as $language) {
    $language = strtolower(substr($language, 0, 2));
    if (in_array($language, array('en', 'ar', 'fr', 'de', 'es', 'zh', 'pt'))) {
        $lang = $language;
        break;
    }
}

// Set the content-language header to the selected language
header("Content-Language: $lang");

// Check if the logo exists
$logo_exists = !empty($logo_path) && file_exists($logo_path);

// Translations object
$translations = array(
    'en' => array(
        'title' => 'Site Maintenance',
        'heading' => 'I\'ll be back soon!',
        'text' => 'I\'m just sprucing things up a bit! In the meantime, feel free to <a href="' . $contact_href . '">reach out to me</a> for a chat or to get any assistance you need. The site will be up and running in just a moment, and the page will automatically refresh at the end of the countdown below.',
        'team' => '&mdash; Dan A.',
        'day' => 'Days',
        'hour' => 'Hours',
        'minute' => 'Minutes',
        'second' => 'Seconds',
    ),
);

// Set the protocol
$protocol = isset($_SERVER['SERVER_PROTOCOL']) ?? '';
if (!in_array($protocol, array('HTTP/1.1', 'HTTP/2', 'HTTP/2.0'), true)) {
    $protocol = 'HTTP/1.0';
}

// Set the status code for crawlers like googlebot...
header("$protocol 503 Service Unavailable", true, 503);
header('Content-Type: text/html; charset=utf-8');
header('Retry-After: ' . $time_to_wait);
?>

<!doctype html>
<html lang="en">
<head>
    <title><?php echo $site_title . ' - ' . $translations[$lang]['title']; ?></title>
    <meta charset="utf-8">
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./logo-dark.png" type="image/png">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            color: #333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 100%;
            margin: 20px;
        }
        h1 {
            font-size: 36px;
            color: <?php echo $font_color ?>;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            line-height: 1.5;
            margin: 20px 0;
        }
        a {
            color: #fc4d22;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .countdown {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .countdown div {
            margin: 0 10px;
            text-align: center;
        }
        .countdown div span {
            display: block;
            font-size: 30px;
            font-weight: bold;
            animation: pulse 1s infinite;
        }
        .countdown div label {
            font-size: 18px;
            color: #777;
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        img.logo {
            max-width: 100px;
            margin-bottom: 20px;
        }
        .social-icons {
            margin-top: 20px;
        }
        .social-icons a {
            margin: 0 10px;
            color: #fc4d22;
            text-decoration: none;
            font-size: 24px;
        }
        .social-icons a:hover {
            color: #fd8263;
        }
        footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
        @media (prefers-color-scheme: dark) {
            body {
                background-color: #2e2e2e;
                color: #e0e0e0;
            }
            .container {
                background: #3e3e3e;
                color: #e0e0e0;
            }
            a {
                color: #fd8263;
            }
            a:hover {
                color: #fc4d22;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <?php if ($logo_exists): ?>
            <a href="<?php echo $logo_link; ?>"><img src="<?php echo $logo_path; ?>" alt="Logo" class="logo"></a>
        <?php endif; ?>
        <h1><?php echo $translations[$lang]['heading']; ?></h1>
        <div>
            <p><?php echo $translations[$lang]['text']; ?></p>
            <p><?php echo $translations[$lang]['team']; ?></p>
        </div>
        <div class="countdown">
            <div>
                <span class="hour"></span>
                <label><?php echo $translations[$lang]['hour']; ?></label>
            </div>
            <div>
                <span class="minute"></span>
                <label><?php echo $translations[$lang]['minute']; ?></label>
            </div>
            <div>
                <span class="second"></span>
                <label><?php echo $translations[$lang]['second']; ?></label>
            </div>
        </div>
        <div class="status-message">
            <p id="status-text">Checking server status...</p>
        </div>
        <?php if ($facebook_link || $linkedin_link || $whatsapp_link): ?>
            <div class="social-icons">
                <?php if ($facebook_link): ?>
                    <a href="<?php echo $facebook_link; ?>" target="_blank"><i class="fab fa-facebook"></i></a>
                <?php endif; ?>
                <?php if ($linkedin_link): ?>
                    <a href="<?php echo $linkedin_link; ?>" target="_blank"><i class="fab fa-linkedin"></i></a>
                <?php endif; ?>
                <?php if ($whatsapp_link): ?>
                    <a href="<?php echo $whatsapp_link; ?>" target="_blank"><i class="fab fa-whatsapp"></i></a>
                <?php endif; ?>
            </div>
        <?php endif; ?>
        <footer>
            <?php echo $legal_info; ?>
        </footer>
    </div>

    <script>
        let attemptCount = 1;

        const storedAttempts = localStorage.getItem('fallback_attempts');
        if (storedAttempts) {
            attemptCount = parseInt(storedAttempts) + 1;
        }
        localStorage.setItem('fallback_attempts', attemptCount.toString());

        // Function to get the next hour's timestamp
        const getNextHour = () => {
            const now = new Date();
            const nextHour = new Date();
            nextHour.setHours(now.getHours() + 1, 0, 0, 0); // Set to next hour, 0 minutes, 0 seconds, 0 milliseconds
            return nextHour;
        };

        // Initialize countdown target
        let countdownTarget = getNextHour();

        const updateStatusMessage = () => {
            const statusElement = document.getElementById('status-text');
            if (attemptCount === 1) {
                statusElement.textContent = 'Server temporarily unavailable. Automatic retry in progress...';
            } else {
                statusElement.textContent = `Server check attempt #${attemptCount}. Retrying every hour...`;
            }
        };

        const countDown = () => {
            const now = new Date();
            const counter = countdownTarget - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;

            const textHour = Math.floor(counter / hour);
            const textMinute = Math.floor((counter % hour) / minute);
            const textSecond = Math.floor((counter % minute) / second);

            if (counter <= 0) {
                document.querySelector(".hour").innerText = "0";
                document.querySelector(".minute").innerText = "0";
                document.querySelector(".second").innerText = "0";

                attemptCount++;

                countdownTarget = getNextHour();

                updateStatusMessage();

                setTimeout(() => {
                    window.location.reload();
                }, 1000);

            } else {
                document.querySelector(".hour").innerText = textHour;
                document.querySelector(".minute").innerText = textMinute;
                document.querySelector(".second").innerText = textSecond;
            }
        };

        updateStatusMessage();

        countDown();
        setInterval(countDown, 1000);

        const addRefreshButton = () => {
            const refreshButton = document.createElement('button');
            refreshButton.textContent = 'Check Now';
            refreshButton.style.cssText = `
                margin: 20px auto;
                padding: 10px 20px;
                background-color: #000;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                display: block;
            `;
            refreshButton.onclick = () => window.location.reload();

            // Insert button after countdown
            const countdown = document.querySelector('.countdown');
            countdown.parentNode.insertBefore(refreshButton, countdown.nextSibling);
        };

        // Add refresh button after a few seconds
        setTimeout(addRefreshButton, 10000);
    </script>

    <style>
        .status-message {
            margin: 20px 0;
            padding: 15px;
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 5px;
            color: #856404;
            text-align: center;
        }

        .countdown {
            visibility: visible !important;
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 30px 0;
        }

        .countdown div {
            text-align: center;
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 8px;
            min-width: 60px;
        }

        .countdown span {
            display: block;
            font-size: 2em;
            font-weight: bold;
            color: #ff8b11;
        }

        .countdown label {
            display: block;
            font-size: 0.9em;
            color: #6c757d;
            margin-top: 5px;
        }
    </style>
</body>
</html>
