document.addEventListener('DOMContentLoaded', function() {
    const optionsButton = document.getElementById('optionsButton');
    const slidingMenu = document.getElementById('slidingMenu');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Language selector elements
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');

    // Language translations
    const translations = {
        sv: {
            // Header and navigation
            'hem': 'Hem',
            'alternativ': 'Alternativ',
            'vardbasen': 'Vårdbasen',
            'sommarjobb': 'Din väg till sommarjobb i Norge.',
            'om': 'Om Vårdbasen',
            'faq': 'FAQ',
            'jobb': 'Att tänka på inför jobb i Norge',
            'personuppgifter': 'Personuppgifter',
            'sok': 'Sök nu',
            
            // Job listings
            'sommervikar': 'Sommarvikarie',
            'sykepleier': 'Sjuksköterska',
            'helsefagarbeider': 'Vårdbiträde',
            'periode': 'Period',
            'stilling': 'Tjänst',
            'lonn': 'Lön',
            'timen': 'timmen',
            
            // Job locations
            'oslo': 'Oslo Universitetssjukhus',
            'bergen': 'Bergen Sjukhus',
            'stavanger': 'Stavanger Universitetssjukhus',
            'trondheim': 'Trondheim Sjukhus',
            'tromso': 'Tromsö Sjukhus',
            'kristiansand': 'Kristiansand Sjukhus',
            'bodo': 'Bodö Sjukhus',
            'alesund': 'Ålesund Sjukhus',
            'haugesund': 'Haugesund Sjukhus',

            // Job descriptions
            'juni': 'Juni',
            'august': 'Augusti',
            'jobbannons': 'Jobbannons',
            'soknu': 'Sök nu',
            'sommervikar_sjukskoterska': 'Sommarvikarie - Sjuksköterska',
            'sommervikar_vardbitrade': 'Sommarvikarie - Vårdbiträde',
            'sommervikar_helsefagarbeider': 'Sommarvikarie - Vårdbiträde',
            'sommervikar_sykepleier': 'Sommarvikarie - Sjuksköterska'
        },
        no: {
            // Header and navigation
            'hem': 'Hjem',
            'alternativ': 'Alternativer',
            'vardbasen': 'Vårdbasen',
            'sommarjobb': 'Din vei til sommerjobb i Norge.',
            'om': 'Om Vårdbasen',
            'faq': 'FAQ',
            'jobb': 'Ting å tenke på før jobb i Norge',
            'personuppgifter': 'Personopplysninger',
            'sok': 'Søk nå',
            
            // Job listings
            'sommervikar': 'Sommer vikar',
            'sykepleier': 'Sykepleier',
            'helsefagarbeider': 'Helsefagarbeider',
            'periode': 'Periode',
            'stilling': 'Stilling',
            'lonn': 'Lønn',
            'timen': 'timen',
            
            // Job locations
            'oslo': 'Oslo Universitetssykehus',
            'bergen': 'Bergen Sykehus',
            'stavanger': 'Stavanger Universitetssykehus',
            'trondheim': 'Trondheim Sykehus',
            'tromso': 'Tromsø Sykehus',
            'kristiansand': 'Kristiansand Sykehus',
            'bodo': 'Bodø Sykehus',
            'alesund': 'Ålesund Sykehus',
            'haugesund': 'Haugesund Sykehus',

            // Job descriptions
            'juni': 'Juni',
            'august': 'August',
            'jobbannons': 'Stilling',
            'soknu': 'Søk nå',
            'sommervikar_sjukskoterska': 'Sommer vikar - Sykepleier',
            'sommervikar_vardbitrade': 'Sommer vikar - Helsefagarbeider',
            'sommervikar_helsefagarbeider': 'Sommer vikar - Helsefagarbeider',
            'sommervikar_sykepleier': 'Sommer vikar - Sykepleier'
        }
    };

    // Modal elements
    const registrationModal = document.getElementById('registrationModal');
    const closeButton = document.querySelector('.close-button');
    const applyButtons = document.querySelectorAll('.apply-button');
    const registrationForm = document.getElementById('registrationForm');

    // Create congratulations modal
    const congratsModal = document.createElement('div');
    congratsModal.className = 'modal';
    congratsModal.innerHTML = `
        <div class="modal-content congrats-content">
            <span class="close-button">&times;</span>
            <h2>🎉 Grattis!</h2>
            <p>Du har nu sökt jobbet och kan bli kontaktad av vårdgivaren.</p>
        </div>
    `;
    document.body.appendChild(congratsModal);

    // Sliding menu functionality
    optionsButton.addEventListener('click', function() {
        slidingMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        slidingMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Modal functionality
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            registrationModal.classList.add('active');
            overlay.classList.add('active');
        });
    });

    // Close buttons functionality
    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', function() {
            registrationModal.classList.remove('active');
            congratsModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    // Close modals when clicking outside
    registrationModal.addEventListener('click', function(e) {
        if (e.target === registrationModal) {
            registrationModal.classList.remove('active');
            overlay.classList.remove('active');
        }
    });

    congratsModal.addEventListener('click', function(e) {
        if (e.target === congratsModal) {
            congratsModal.classList.remove('active');
            overlay.classList.remove('active');
        }
    });

    // Form submission
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server
        registrationModal.classList.remove('active');
        congratsModal.classList.add('active');
    });

    // Toggle language dropdown
    languageButton.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        languageDropdown.classList.remove('active');
    });

    // Handle language selection
    languageDropdown.addEventListener('click', function(e) {
        if (e.target.classList.contains('language-option')) {
            const lang = e.target.dataset.lang;
            updateLanguage(lang);
            languageDropdown.classList.remove('active');
        }
    });

    // Function to update all text on the page
    function updateLanguage(lang) {
        // Update flag icon
        const flagIcon = languageButton.querySelector('.flag-icon');
        flagIcon.src = `https://flagcdn.com/w20/${lang === 'sv' ? 'se' : 'no'}.png`;
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update job listings
        document.querySelectorAll('.job-card').forEach(card => {
            const title = card.querySelector('h3');
            const paragraphs = card.querySelectorAll('p');
            
            // Update title
            if (title.textContent.includes('Sommervikar - Sjuksköterska')) {
                title.textContent = translations[lang]['sommervikar_sjukskoterska'];
            } else if (title.textContent.includes('Sommervikar - Vårdbiträde')) {
                title.textContent = translations[lang]['sommervikar_vardbitrade'];
            } else if (title.textContent.includes('Sommervikar - Helsefagarbeider')) {
                title.textContent = translations[lang]['sommervikar_helsefagarbeider'];
            } else if (title.textContent.includes('Sommervikar - Sykepleier')) {
                title.textContent = translations[lang]['sommervikar_sykepleier'];
            }
            
            // Update paragraphs
            paragraphs.forEach(p => {
                // Update hospital names
                Object.keys(translations[lang]).forEach(key => {
                    if (key.match(/^(oslo|bergen|stavanger|trondheim|tromso|kristiansand|bodo|alesund|haugesund)$/)) {
                        p.textContent = p.textContent.replace(translations[lang === 'sv' ? 'no' : 'sv'][key], translations[lang][key]);
                    }
                });

                // Update labels and values
                p.textContent = p.textContent
                    .replace('Periode:', translations[lang]['periode'] + ':')
                    .replace('Stilling:', translations[lang]['stilling'] + ':')
                    .replace('Lønn:', translations[lang]['lonn'] + ':')
                    .replace('timen', translations[lang]['timen'])
                    .replace('Juni', translations[lang]['juni'])
                    .replace('August', translations[lang]['august']);
            });
        });

        // Update apply buttons
        document.querySelectorAll('.apply-button').forEach(button => {
            button.textContent = translations[lang]['sok'];
        });
    }
}); 