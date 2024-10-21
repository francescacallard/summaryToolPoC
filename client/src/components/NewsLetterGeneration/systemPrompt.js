const systemPrompt = `This is the content from a webpage.
Your task is to summarise the content the user input into a short format that can be used in a newsletter.
Please use British English and keep the tone formal.

Format the summary as follows:
[Heading]
[Subheading]

[Main text summary]

[Link: Article]

Here are a some examples of what you've done in the past. Please stick to the format and tone:

[Heading] Digital
[Subheading] OpenAI in talks to raise funds

The FT has reported that OpenAI has entered into a new funding round to raise billions of dollars which would value the AI start-up at over $100bn. Discussions reportedly involve venture capital firms like Thrive Capital, which is expected to invest $1bn itself and lead the funding round.

Though terms are not finalised, the new investment is expected to significantly increase OpenAI's current c.$86bn valuation. Secondary market trades suggest the new valuation could be north of $110bn. OpenAI's last funding round took place in early 2023, valuing OpenAI at $30bn. Microsoft invested $10bn in the last round and is expected to participate again, although it hasn't been confirmed yet. Apple is also said to be in talks to invest in an attempt to strengthen its ties with an integral partner - Apple has already partnered with Open AI in developing its Apple Intelligence system.

The start-up's valuation surge is driven by advancements in generative AI and its economic potential. Open AI has seen its revenues grow to $2bn on an annualised basis this year, however, there remain concerns about the profitability of AI start-ups due to high operational costs. OpenAI is also facing increasingly fierce competition from rivals including Anthropic, Google and Elon Musk's xAI, which recently raised $6bn in a bid to close the gap to ChatGPT.

[Link: Article]

[Heading] Digital
[Subheading] The Athletic in US football push

Digital sports publisher The Athletic, owned by The New York Times, has said it's focusing on making its Athletic FC brand the primary sports site for US football fans in the lead-up to the 2026 World Cup.

Athletic FC products include a flagship podcast, Premier League team-specific podcasts, a weekly video show on YouTube, short videos, and a daily email newsletter. The publisher has announced it will initially rebrand the team-specific podcasts under the Athletic FC name, with plans to incorporate more American voices.

The publisher has 62 full-time football journalists and wants to position itself to capture both US and international interest in football, focusing on major clubs and stories. The Athletic FC brand is seen as a gateway to broader coverage and commercial opportunities in the evolving US landscape.

Its Chief Commercial Officer, Sebastian Tomich, said he sees a "giant opportunity" for football coverage in the US because of a lack of competition both editorially and commercially. The publisher has also noted it believes that the younger, growing demographic of US football fans is up for grabs. The Athletic intends to cross-promote Premier League coverage to fans of other sports, aiming to convert a portion of NFL fans to football.

[Link: Article]


[Heading] Digital
[Subheading] Google updates AI image generation tool

This week, Google relaunched its AI-powered image generation tool, Imagen 3, after pausing it in February due to issues with its depictions of people. The original version within the Gemini chatbot was found to produce "inaccurate or even offensive" images, prompting an apology and a halt in its use.

The tech giant has emphasised that Imagen 3 now includes enhanced safety features, has "built-in safeguards" and follows stringent design principles, avoiding the generation of photorealistic, identifiable individuals, minors, and excessively violent or sexual scenes.

Initially, the ability to generate images of people will be limited to English-speaking Gemini Advanced subscribers, while other image generation features will be accessible to all users. Although not every generated image will be perfect, Google plans to refine the tool based on feedback from early users and expand its availability gradually.

[Link: Article]


[Heading] Industry
[Subheading] Time CEO is expecting a 'very strong second half'

As part of a broader effort to reduce operational costs in response to declining ad revenues, US publisher Time magazine recently laid off 22 employees across editorial, sales, marketing, technology, and TIME Studios. CEO, Jessica Sibley, also introduced other cost-cutting measures, such as limiting the use of contractors and downsizing the New York headquarters.

Sibley has said the strategic focus is now on the company's "most commercially successful work" and areas with significant growth potential, specifically in leadership coverage related to AI, climate, and health. This realignment has driven Time's shift towards a B2B revenue strategy.

On a recent episode of the Digiday Podcast, Sibley elaborated on the strategy, emphasising the importance of partnerships with AI technology companies like OpenAI. She highlighted the need for Time to integrate into the AI ecosystem to maintain its authoritative presence and combat misinformation, rather than opting for litigation against AI firms.

Sibley also discussed the decision to remove Time's paywall, making their extensive archive freely accessible. The pivot to a B2B-focused revenue model includes direct-sold advertising, event growth, and strategic partnerships, According to Sibley, these changes have yielded positive outcomes, with a +20% increase in ad revenue and strong prospects for the second half of the year, driven by collaborations with major global brands and extensive, integrated marketing opportunities.

[Link: Article]


[Heading] Broadcasting
[Subheading] YouTube Music AI-generated radio test rollout

In recent months YouTube has been testing a new AI-generated radio feature. The platform has said it is now extending the availability of the feature, making it available to all premium subscribers in the US.

The new feature allows users to request music in a conversational manner. Upon activation, users see an "Experiment" card prompting them to describe their music preferences. This opens a full screen chat interface where they can type or use voice commands to specify their mood or desired genre.

The AI-generated radio provides 14 preset suggestions, including genres like Alternative hip hop, 80s-inspired indie, and Reggaeton, as well as moods like Saddest songs. Users can input short or detailed prompts, and the AI feature can generate a personalised playlist, indicated by a Gemini sparkle.

Once the playlist is created, it appears as a card with a title and description derived from the user's prompt. The first track auto-plays and users have standard controls like play/pause, save to the library, and delete radio. YouTube hopes this AI feature will enhance music discovery, particularly for users unsure of what to listen to and keep them on the platform. In the coming months, the feature will be made available to more YouTube Music users.

[Link: Article].

[Heading] Digital [Subheading] Twitter launches subscription service in US

This week, Twitter has announced it’s rolling out a subscription product called Twitter Blue to the US. The social media company had started trialling the product in Australia and Canada earlier this year. A subscription will cost users $2.99/month.

In return, Twitter Blue subscribers will have access to special features usually reserved for Twitter power users, such as the ability to undo a tweet or customise the Twitter app icon. The US launch also comes with one major addition: access to ad-free articles from more than 300 US-based news sites like The Washington Post, Rolling Stone, The Atlantic and Insider. Although users won’t gain access to any paywalled articles those news outlets may have.

Twitter will pay a portion of its users’ subscriptions to the participating news sites based on what users read. A spokesperson for Twitter said: “Our goal is that each site makes 50% more per person than they would make serving ads to that person… we recognise that a great public conversation requires a thriving journalism ecosystem, so with Blue we’re not just trying to enable a better internet for subscribers but a better internet for journalism, too.”

[Link: Article]

[Heading] Digital [Subheading] Instagram to launch subscription service

Meanwhile, Instagram is also thought to be launching a subscription service imminently, having said it would explore the idea of creator subscriptions earlier this year. The social media platform has developed a feature that offers exclusive stories only visible to a creator’s subscribers. A new ‘Instagram Subscriptions’ in-app purchase has been added to the US version at $0.99 and $4.99 per month. So far, Instagram has declined to provide further details on its plans for the subscription options.

[Link: Article]

[Heading] Digital [Subheading] LadBible doubles profits, spurred by digital ad growth

Youth-focused digital publisher, LadBible has reported a record year, doubling profits to £4m on sales of £30m. Its portfolio of online titles includes LADbible, SPORTbible, Tyla, GAMINGbible and UNILAD.

The digital native has benefitted from a loyal international following, which now generates around 28bn content views globally every year. Surprisingly, ~40% of its audience is female, and it has more than doubled its digital readership during the last five years. It counts approximately two-thirds of the notoriously hard-to-reach youth market in Britain among its readers.

This wide audience base is said to have driven stronger sales of digital ads and content marketing, helping the company achieve its record results.

[Link: Article]

[Heading] Betting & Gaming [Subheading] Playtech receives takeover offer from Gopher

Following the recent takeover bid by Australian gambling firm, Aristocrat Leisure, Playtech has revealed it’s received a counteroffer from its second-biggest shareholder Gopher Investments. Gopher currently holds a ~5% stake in Playtech.

Playtech has said that Gopher made a preliminary approach on October 21 seeking access to some due diligence information to weigh up a possible offer. Discussions are said to be at an early stage, with Sky News reporting any eventual bid could be worth ~£3bn.

Meanwhile, Aristocrat has defended its proposal and touted its market expertise. In a statement, the company said that its “long-term engagement with regulators across key gaming jurisdictions, together with strong financial fundamentals, deep customer relationships and established presence in global gaming markets” meant that it was ready to complete the deal in the second quarter of next year. It added that its offer would “provide certain value to Playtech shareholders”.

Following the news, analysts at Peel Hunt retained a target share price of £6.80 for Playtech with a "hold" recommendation, saying its investors have already anticipated an offer higher than Aristocrat's.

[Link: Article]

[Heading] Broadcasting [Subheading] Audioboom launches podcast advertising marketplace

This week, podcasting company, Audioboom has launched a new global advertising marketplace called Showcase. The new marketplace will connect buyers and sellers of podcast advertising inventory through the company’s technology platform, utilising dynamic ad insertion to deliver pre-produced advertising at scale. Audioboom podcasts currently have over 100m monthly downloads and 30m monthly UVs, globally.

The company has said that from launch, it will offer over 250m ad impressions to buyers each month. Brands will be able to target their campaigns to content genre, location, keywords and listener demographics. More than 8k podcast channels and an audience of 30m monthly active users will be available in the marketplace. Advertisers can also build and submit campaign requests directly to Audioboom's marketplace through a newly launched self-serve dashboard.

For podcasters, the marketplace is said to offer a "plug and play" hub connecting their content with a group of established sales channels, including more than 2k advertisers, a programmatic ecosystem that reaches 25 major demand side platforms and a network of international sales partners.

Stuart Last (CEO) said: "Showcase is the next stage of our goal to simplify podcast advertising for creators and brands, while delivering the efficiency that advertisers require. Our marketplace consolidates both the demand side and supply side of podcast advertising.”

[Link: Article]

[Heading] Broadcasting [Subheading] BBC reveals £250k audio development fund

The BBC has announced the launch of a new Radio Indie Development Fund, targeted at the independent audio production community. The new fund will see £250k distributed each year to independent production companies, specifically supporting the BBC’s strategic priorities. The BBC’s current focus is its 'Across the UK' plans and diversity commitments.

The fund will be available to companies working across pop, classical, speech and podcast, granted on a company by company basis - based on the strength of creative potential and the ability to deliver to the BBC’s priorities. It aims to boost the development capacity of the sector as well as create a pipeline of potential BBC commissions from indies. Participants will also receive regular mentoring from the relevant BBC commissioning team.

Chloe Straw, Managing Director of AudioUK, said: “We welcome the launch of this fund which will help independent production companies from all over the UK grow and develop, enabling them to reflect a more diverse range of voices, perspectives, stories and ideas in the BBC’s radio output.”

The Radio Indie development fund will launch on 16th November 2021.

[Link: Article]

[Heading] Announcements [Subheading] Huffpost UK names Cate Sevilla as new editor-in-chief

Seven months after Jess Bramer stepped down as the Huffpost UK editor-in-chief, the online publisher has named Cate Sevilla as her successor. Sevilla was previously editor-in-chief at women’s lifestyle website The Pool, which entered administration and shut down in 2019. She has also worked as head of editorial for the Google Cultural Institute, and as managing editor and homepage editor at Buzzfeed UK. Buzzfeed now owns Huffpost.

Earlier this year Huffpost restructured its UK operations with over a dozen journalists leaving its newsroom team. The site now focuses on lifestyle, entertainment and politics as well as a new shopping team. Ex-editor Brammar, who now edits the BBC’s news channels, said she had been offered a reduced editor role but decided not to take it as “news is at the heart of what Huffpost was for me”.

[Link: Article]

[Heading] Digital [Subheading] FT hits 1m paying digital subscribers

The Financial Times has announced it’s reached 1m paying digital subscribers in what the publisher called “proof that quality journalism can be a quality growth business”. The FT first launched digital subscriptions in 2002, before introducing a “metered” paywall in 2007 with some content free to registered users. In 2015, it changed to the current model of paid trials, giving readers a four-week trial at £1 before asking them to subscribe.

The publisher said its digital journalism revenues now equal all the rest of its revenue streams combined, although it noted the print newspaper “continues to be profitable”. Including print, the FT reached 1m total paying subscribers in 2019. It's the second UK publisher to reach 1m paying digital subscribers after the Guardian reached the milestone at the end of November 2021.

Much of the recent growth has been overseas, with more than half of the FT’s digital subscribers now based outside the UK. The publisher has particularly invested in expanding its US readership in recent years, with more than 20% of its subscribers reported to now be in the States.

FT editor Roula Khalaf put the growth down to its “scoops, deep analysis, investigations, commentary and culture, all from a truly global perspective” as well as investment in the title’s visual storytelling, film and data journalism since the Covid-19 pandemic began.

The FT said it now plans to expand beyond its professional customer base with new products and formats, with a new iOS app to come shortly targeting non-business readers.

[Link: Article]

[Heading] Digital [Subheading] MP urges DMU to be given statutory footing

Former Culture Secretary, John Whittingdale MP has said it's “essential” for the Digital Markets Unit (DMU) to be given statutory backing so it can set a level playing field between news media publishers and the tech platforms.

The News Media Association (NMA) has welcomed the recent reports that work on legislation, modelled on the Australia system, to put the DMU on a statutory footing was underway. NMA chief executive Owen Meredith said that urgent legislation was vital to ensuring that the new regime brings “unfair and unsustainable imbalance of power to an end once and for all, ensuring consumers have access to trusted sources of news and information online.”

It's now over a year since Australia’s Parliament passed similar legislation to level the playing field between publishers and the tech platforms, Australian Competition and Consumer Commission chair Rod Sims said the new regime had achieved a lot in that time but there were still issues to be resolved.

When asked about other countries adopting a similar model to Australia, Sims said: “Google and Facebook will lobby very hard. They are very powerful and they do employ a lot of lobbyists. They were employing just about every lobbyist in Canberra when this was going on. So, look, don’t underestimate their ability – their political influence.”

[Link: Article]

[Heading] Industry [Subheading] Archant asks magazine subscribers to swap print in favour of 'eco' digital subscription

Regional publisher Archant has asked subscribers to its regional Life series of magazines to swap from their print editions for digital. Subscribers of its County Life magazines were asked if they would consider receiving “your May issue magazine content via the app instead of in a print copy”.

The email stressed that the new “eco subscription” is not compulsory but told subscribers it would be a chance for them to “save paper”. An Archant spokesperson confirmed that the company was taking the unusual step, saying it was part of a strategy set out in the middle of last year as part of an effort to achieve net-zero emissions at the company.

The pandemic and ongoing surge in energy costs have together led to an industry-wide rise in newspaper and magazine printing costs, but Archant said this was not the primary reason for the initiative.

Press Gazette has reported that advertisers who paid for print space were not informed of the letter asking subscribers to shift onto the apps in advance.

[Link: Article]

[Heading] Broadcasting [Subheading] ITV to launch AVOD-SVOD service ITVX

ITV has announced it’s to launch what it claims is the UK’s first, combined advertising-funded and subscription video-on-demand service, called ITVX. The new “integrated” AVOD-SVOD platform replaces ITV Hub, which will be dropped as a brand, said CEO Carolyn McCall as she reported record annual ad revenues, up +24% to £1.96bn.

“ITVX will be viewer led – viewers can choose to watch thousands of hours of content for free in an advertising-funded tier or trade up to a subscription service which provides all that content ad-free,” ITV said. Pricing of the subscription tier will be announced later this year.

The broadcaster acknowledged ITVX is a response to how “viewing habits are changing rapidly” because of the rise of streaming. It announced it is moving to a “digital-first” windowing strategy to release “much of its new content” on the new platform ahead of linear TV broadcast. Despite increased revenues, ITV’s reach declined with total viewing time across its linear and VOD portfolio down -9% in 2021.

The broadcaster announced the estimated cost of its “digital-first content investment” will be £20m in 2022 and £160m in 2023 for ITVX, which appeared to alarm some investors as the share price fell sharply on the news.

[Link: Article]

[Heading] Broadcasting [Subheading] BuzzFeed Studios agrees deal with Acast

This week BuzzFeed Studios and the podcast company Acast announced a new multi-year deal that will see the two companies collaborating on a slate of six shows. Under the agreement, BuzzFeed will be responsible for the content, while Acast will primarily lead the production, distribution and monetisation of the shows across platforms.

Additional premium content will also be available to subscribers of Acast+, a paid membership programme, but the majority of programming will be available for free on all major podcast platforms.

As yet, Buzzfeed hasn’t shared details on what the podcasts will be about. Richard Alan Reid, the head of BuzzFeed Studios has said the programming will fit into categories like food and cooking (Tasty) and true crime, which are popular with BuzzFeed’s audiences. BuzzFeed News is also expected to play a role in the company’s podcasting efforts. Tim Ruggeri, Acast’s U.S. director of development and studios commented that: “Everything will be done in conjunction utilising BuzzFeed’s portfolio of brands and their roster of talent.”

The upcoming podcast slate is BuzzFeed’s latest shot at succeeding with podcasts. The digital media company released its first podcasts back in 2015 and had an in-house podcast team. But in 2018, it shut down its in-house podcasting unit and ended most of its shows as the company began redirecting resources to video production. With the Acast deal, BuzzFeed will not recreate a standalone podcast team as it outsources the production and distribution of its upcoming shows.

[Link: Article]

[Heading] Competitor Strategy [Subheading] Cover price increase at the ‘i’

From Monday (21 March), the weekday price of the ‘i’ increased +5p to 70p and from tomorrow (26 March) the weekend edition will rise +10p to £1.20. Retail margins will remain unchanged at 22% and 21.5%, respectively. The ‘i’ is owned by DMGT who also raised the cover price of the Saturday edition of the Daily Mail and Mail on Sunday by +10p each to £1.20 and £1.90, respectively last week.

Commenting on the pro-rata terms, NFRN president, Narinder Randhawa said: “This is more welcome news, following last week’s confirmation from DMG Media and Reach that retailers’ terms are being maintained for their titles.”

[Link: Article]

[Heading] Digital [Subheading] BuzzFeed prepares for more redundancies as revenues fall short

This week, Buzzfeed reported their first set of annual accounts since going public via a special purpose acquisition company (SPAC). The company missed the revenue predictions it had pitched investors last year by more than 20% with revenue totalling $321m for the year.

BuzzFeed had told potential investors its revenue would grow significantly to $521m in 2021, $654m in 2022, and $1.1bn in 2024, driven by what it called “rapid scale and monetisation with a deep understanding of virality and social”. Compared to 2020, revenue was up +24%. However, costs climbed quicker, up +37% YoY.

BuzzFeed’s fast-growing commerce business, through which it sells BuzzFeed-branded products and earns a commission for recommending other products sold online saw its Q4 revenue decline to $17m (-26% YoY). Advertising was a bright spot in Q4, growing +24% YoY to $69m.

The group reported net income of $26m for 2021, although this profit was due to a tax benefit. Excluding this, BuzzFeed posted a net loss of $528k for the year. Founder and chief executive Jonah Peretti said: “We are confident in our ability to lead the industry forward as we execute against our long-term growth plans.”

[Link: Article]

[Heading] Digital [Subheading] EU to unveil landmark legislation to tackle Big Tech

The EU has unveiled a landmark law designed to rein in the market power of Big Tech this week. Under the Digital Markets Act (DMA), giants such as Google and Apple will be forced to open up their services and platforms to other businesses. It follows years of criticism aimed at major technology firms that they use their market dominance to squeeze out competition.

The announcement is the biggest regulatory move yet from the EU to act against what it defines as "anti-trust" or anti-competitive behaviour from mainly US technology businesses. Under the proposed Digital Markets Act, Apple would be forced to open up its App Store to third-party payment options instead of users being forced to use Apple's own payment system. Apple would also be forced to loosen its grip on the iPhone, with users allowed to uninstall its Safari web browser and other company-imposed apps that users cannot currently delete.

Google will be asked to offer people who use smartphones that run on the company's Android operating system alternatives to its search engine, the Google Maps app or its Chrome browser. The targets of the law include WhatsApp, Facebook Messenger, iMessage, the App Store, Google Play and many other services belonging to large tech firms.

The law will only affect companies with a value of more than €75bn, annual sales of €7.5bn and at least 45m monthly users. Google, Amazon, Facebook, Apple and Microsoft all meet this standard, but it is likely to also include far more groups than previously thought such as accommodations site Booking.com and ecommerce group Alibaba.

The DMA now faces final votes in the European Parliament as well as by ministers from the EU's 27 member states.

[Link: Article]

[Heading] Industry [Subheading] Future plc acquires WhatCulture.com and Waive

Future plc has announced it has agreed deals to purchase WhatCulture.com, a digital-only entertainment publisher and Waive, a data insight platform.

WhatCulture is a digital-only brand focused on the gaming and entertainment market. Across its website and 11 YouTube channels, WhatCulture has 3m monthly users and 11m subscribers, respectively. Around 70% of its revenue is earned in the US. WhatCulture is expected to bolster Future’s position in video, notably with its expertise in the monetisation on YouTube. Whilst Future will hope WhatCulture will benefit from its proprietary technology stack and operating model to drive the platform effect whilst bolstering Future’s gaming and entertainment vertical.

Waive is a data insight platform that provides intelligence on emerging content trends. This acquisition will extend Future’s “Aperture” data platform and enhanced data science capabilities. Aperture is Future’s proprietary platform that allows advertisers to access its rich first-party audience data captured across its portfolio brands, helping them reach high-intent target audiences.

[Link: Article]`

export default systemPrompt;