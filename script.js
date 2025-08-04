// Horoscope data: 
const horoscopes = {
    'Aquarius': [
        "Your water bottle will mysteriously refill itself today. Scientists hate this one weird trick!",
        "A UFO will accidentally drop your Amazon package today. Check your roof for prime delivery.",
        "You'll discover that your pet fish has been secretly judging your life choices. They approve.",
        "Today you'll invent something useless but oddly satisfying, like a fork for soup.",
        "Mercury is in Gatorade today, so expect your thoughts to be electrolyte-enhanced.",
        "Your rebellious spirit will inspire you to eat cereal for dinner. Revolutionary!",
        "You'll receive a friend request from the future version of yourself. Accept it.",
        "Your WiFi will connect to the universe today. Password is 'StarsAlign123'.",
        "A robot will compliment your human-like qualities. Take it as a compliment.",
        "Today you'll solve world peace by rearranging your furniture in a revolutionary pattern.",
        "Your eccentric ideas will make perfect sense to a confused houseplant.",
        "You'll accidentally invent time travel while trying to set your alarm clock."
    ],
    'Aries': [
        "You'll start 47 new projects today and finish exactly zero of them. This is the way.",
        "Your horns are extra pointy today - use them to open difficult packages.",
        "A ram will give you financial advice at the grocery store. Listen carefully.",
        "Your impatience will pay off when you're first in line for absolutely nothing important.",
        "Today you'll argue with a GPS and somehow convince it you're right.",
        "Your competitive nature will lead to an intense staring contest with a mirror. You'll win.",
        "You'll challenge a toaster to a duel and emerge victorious with perfect toast.",
        "Your energy levels will power a small village. Consider charging rent.",
        "Today you'll sprint to catch the elevator, then realize you wanted the stairs.",
        "A fire sign will literally set your motivation ablaze. Fire extinguisher not included.",
        "You'll win an argument with autocorrect and feel like a digital warrior.",
        "Your impulsive decisions will accidentally create the perfect day. Pure luck!"
    ],
    'Cancer': [
        "Your shell will protect you from negative vibes and also from mild weather.",
        "You'll cry at a commercial about insurance and feel emotionally validated.",
        "A crab will teach you the ancient art of sideways problem-solving today.",
        "Your mood swings will create their own weather system. Umbrella recommended.",
        "You'll reorganize your entire home based on feng shui advice from a fortune cookie.",
        "Today you'll adopt a houseplant and immediately worry about its feelings.",
        "Your emotional radar will detect someone's bad day from three blocks away.",
        "You'll make soup so comforting that it fixes everyone's childhood trauma.",
        "A hermit crab will teach you the art of upgrading your living situation.",
        "Your nurturing instincts will heal a broken electronic device with love.",
        "Today you'll build a blanket fort so cozy that NASA wants to study it.",
        "Your intuition will predict the exact moment the microwave beeps."
    ],
    'Capricorn': [
        "Your stubborn goat energy will help you win an argument with a vending machine.",
        "Today you'll climb a mountain of laundry and plant your flag of victory on top.",
        "Saturn is doing the cha-cha today, so expect your serious plans to get funky.",
        "You'll create a 47-step plan to make a sandwich. It will be the best sandwich ever.",
        "Your patience will be rewarded when you finally reach the front of a very slow line.",
        "A mountain goat will appear in your dreams offering career advice. Take notes.",
        "Your determination will convince a broken printer to work through sheer willpower.",
        "Today you'll achieve your goal of organizing the junk drawer. Legend status: unlocked.",
        "A CEO will ask for your secret to success. Answer: 'I eat my vegetables.'",
        "Your practical nature will find seventeen uses for a paperclip. Patent pending.",
        "You'll build a tower of responsibilities so tall it reaches the moon.",
        "Today you'll turn procrastination into a fine art form with a detailed schedule."
    ],
    'Gemini': [
        "You'll have 18 different conversations with yourself today and disagree with most of them.",
        "Your twin personality will order pizza while your other half tries to diet. Pizza wins.",
        "Mercury is in microwave mode today, so your thoughts will be ready in 30 seconds.",
        "You'll change your mind so many times that your brain gets dizzy.",
        "Today you'll speak fluent sarcasm to a customer service representative.",
        "Your curiosity will lead you down a Wikipedia rabbit hole about extinct snails.",
        "You'll text someone and then immediately forget what you were talking about.",
        "Your multitasking skills will impress a computer. It will ask for tips.",
        "Today you'll learn 37 random facts and forget 38 important things.",
        "A butterfly will give you life advice about embracing change. Very wise.",
        "You'll have a brilliant idea and write it down on something you'll never find again.",
        "Your social skills will charm a chatbot into having an existential crisis."
    ],
    'Leo': [
        "The sun will literally shine brighter because you woke up today. Science!",
        "Your mane will be magnificent today, even if you don't have one. Hair flip optional.",
        "A lion will slide into your DMs with compliments about your roaring technique.",
        "Your dramatic entrance to the grocery store will receive standing ovation from produce.",
        "Today you'll give an Oscar-worthy performance while explaining why you're late.",
        "Your natural charisma will charm a traffic light into staying green longer.",
        "You'll take a selfie so perfect that cameras everywhere will weep with envy.",
        "A spotlight will follow you around today. Paparazzi are probably houseplants.",
        "Your confidence will be so radiant that solar panels will charge themselves.",
        "Today you'll give a TED talk to your bathroom mirror and receive thunderous applause.",
        "Your dramatic flair will turn buying groceries into a Broadway musical.",
        "A crown will mysteriously appear on your head. You were born ready for this moment."
    ],
    'Libra': [
        "You'll spend 3 hours deciding what to wear and still feel underdressed for staying home.",
        "The scales of justice will be replaced with scales that measure pizza slice equality.",
        "Your indecisiveness will create a new time zone where deadlines don't exist.",
        "Today you'll diplomatically negotiate a peace treaty between your left and right sock.",
        "A lawyer will compliment your natural ability to see both sides of a coin flip.",
        "Your quest for balance will lead to you standing on one foot for exactly 4.7 seconds.",
        "You'll find the perfect middle ground between two terrible options. Genius!",
        "Your diplomatic skills will resolve a heated argument between salt and pepper.",
        "Today you'll create world peace by perfectly arranging throw pillows on your couch.",
        "A judge will ask for your advice on making fair decisions about lunch choices.",
        "You'll spend so long weighing pros and cons that the decision makes itself.",
        "Your sense of harmony will tune a piano just by looking at it lovingly."
    ],
    'Pisces': [
        "You'll swim upstream against a current of Monday morning energy and somehow succeed.",
        "A fish will text you motivational quotes throughout the day. Don't question it.",
        "Your tears of joy will water an imaginary garden of hopes and dreams.",
        "Today you'll communicate telepathically with your houseplants. They have gossip.",
        "Neptune is in washing machine mode, so expect your emotions to be spin-cycled.",
        "Your intuition will guide you to find the TV remote in the most logical place: the fridge.",
        "You'll dream so vividly that Netflix will offer you a directing contract.",
        "A mermaid will give you swimming lessons in your bathtub. Fins not included.",
        "Your empathy will be so strong that you'll feel sorry for a broken umbrella.",
        "Today you'll cry happy tears at a commercial about friendship between animals.",
        "Your artistic soul will turn grocery shopping into an interpretive dance.",
        "You'll solve a mystery by following your gut feeling and a school of imaginary fish."
    ],
    'Sagittarius': [
        "Your arrow will hit the bullseye of a discount bin filled with things you don't need.",
        "A centaur will offer you a ride to work, but you'll have to provide your own saddle.",
        "Your wanderlust will be satisfied by getting lost in your own neighborhood.",
        "Today you'll philosophically debate the meaning of life with a fortune cookie.",
        "Your optimism will be so bright that you'll need sunglasses indoors.",
        "Adventure calls, but it goes straight to voicemail because you're busy watching Netflix.",
        "You'll discover a new continent in your backyard. It's actually just a really big puddle.",
        "Your free spirit will inspire a caged bird to break into spontaneous song.",
        "Today you'll plan a world tour and then realize you forgot your passport exists.",
        "A travel brochure will personally thank you for believing in the impossible.",
        "Your philosophical wisdom will solve the age-old question: 'Why do hot dogs come in packs of 10 but buns in packs of 8?'",
        "You'll shoot for the stars and accidentally discover a new constellation shaped like pizza."
    ],
    'Scorpio': [
        "Your stinger will be particularly sharp today - perfect for popping bubble wrap.",
        "You'll uncover the mystery of where all your missing socks go. Plot twist: they're sentient.",
        "A scorpion will rate your intensity on a scale of 1 to 10. You'll score an 11.",
        "Your mysterious aura will confuse a houseplant into growing backwards.",
        "Today you'll transform into your final form: someone who remembers where they put their keys.",
        "Your passionate energy will heat up leftover pizza without using a microwave.",
        "You'll solve a cold case that even detectives gave up on: finding matching Tupperware lids.",
        "Your penetrating gaze will make a security camera blink first.",
        "Today you'll discover the secret conspiracy of why USB cables never plug in right the first time.",
        "A phoenix will ask you for tips on dramatic transformations. You're the expert.",
        "Your investigative skills will uncover that your dog has been plotting to steal your favorite chair.",
        "You'll read someone's mind so accurately that they'll ask if you're psychic. Answer: 'Maybe.'"
    ],
    'Taurus': [
        "Your stubborn bull energy will help you win a staring contest with a statue.",
        "Today you'll discover that your spirit animal is a cow who gives chocolate milk.",
        "Your love of luxury will lead you to buy the fancy toilet paper. You deserve it.",
        "A bull will give you investment advice: 'Buy low, moo high.'",
        "Your patient nature will be rewarded when you finally untangle your headphones.",
        "Today you'll plant roots so deep that you become one with your couch.",
        "Your determination will convince a stubborn jar to open through pure willpower.",
        "You'll build a blanket fort so sturdy that it could survive an earthquake.",
        "Today you'll perfect the art of strategic procrastination and call it 'planning.'",
        "A farmer will compliment your natural ability to spot quality produce.",
        "Your steady presence will calm a nervous WiFi router back to working condition.",
        "You'll find treasure in your couch cushions. It's definitely not just loose change."
    ],
    'Virgo': [
        "Your perfectionist tendencies will lead you to alphabetize your spice rack by smell.",
        "Today you'll spot 73 typos in a text message and resist the urge to correct them all.",
        "A virgin olive oil will personally thank you for choosing the extra virgin option.",
        "Your analytical mind will solve the case of the missing left shoe (it's under the bed).",
        "Today you'll organize your thoughts so well that they file themselves alphabetically.",
        "Your attention to detail will help you find Waldo in record time. He's been waiting.",
        "You'll create a color-coded system for organizing your junk drawer. Marie Kondo weeps with joy.",
        "Your critical eye will spot a typo in this horoscope. There isn't one, but you'll keep looking.",
        "Today you'll perfect a recipe by measuring ingredients to the nearest molecule.",
        "A librarian will ask for your secret to perfect organization. Answer: 'Label everything.'",
        "Your eagle eye will notice that someone moved your pen 2.3 millimeters to the left.",
        "You'll proofread the universe and find several inconsistencies. File a complaint with management."
    ]
};

let selectedSign = null;

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all zodiac sign images
    const zodiacSigns = document.querySelectorAll('.zodiac-signs a');
    zodiacSigns.forEach(sign => {
        const img = sign.querySelector('img');
        
        sign.addEventListener('click', function(e) {
            e.preventDefault();
            selectZodiacSign(sign.id, img);
        });
    });

    // Add event listener to the crystal ball
    const crystalBall = document.getElementById('crystal-ball');
    crystalBall.addEventListener('click', function() {
        showHoroscope();
    });
});

function selectZodiacSign(signId, imgElement) {
    // Remove selected class from all images
    const allImages = document.querySelectorAll('.zodiac-signs img');
    allImages.forEach(img => img.classList.remove('selected'));
    
    imgElement.classList.add('selected');
    selectedSign = signId;
    
    // Reset the crystal ball to the original image
    const crystalBall = document.getElementById('crystal-ball');
    crystalBall.src = 'img/crystal-ball1.png';
    
    // Clear the previous horoscope result
    document.getElementById('horoscope-result').textContent = '';
    
    console.log('Selected sign:', selectedSign);
}

function showHoroscope() {
    const horoscopeResult = document.getElementById('horoscope-result');
    const crystalBall = document.getElementById('crystal-ball');
    
    if (!selectedSign) {
        horoscopeResult.textContent = 'Please select your zodiac sign first!';
        horoscopeResult.style.color = '#333';
        return;
    }
    
    // Change crystal ball image to crystal-ball2
    crystalBall.src = 'img/crystal-ball2.png';
    
    // Get random horoscope for the selected sign
    const signHoroscopes = horoscopes[selectedSign];
    const randomIndex = Math.floor(Math.random() * signHoroscopes.length);
    const selectedHoroscope = signHoroscopes[randomIndex];
    
    // Display the horoscope
    horoscopeResult.style.color = '#333';
    horoscopeResult.innerHTML = `
        <strong>${selectedSign}</strong><br><br>
        ${selectedHoroscope}
    `;
    horoscopeResult.style.opacity = '0';
    setTimeout(() => {
        horoscopeResult.style.transition = 'opacity 0.5s ease';
        horoscopeResult.style.opacity = '1';
    }, 100);
}
