
        // State Management
        const state = {
            currentOrg: 'nybar',
            currentTab: 'home',
            currentCommittee: null,
            committeeTab: 'updates',
            user: {
                id: 'u_1',
                name: 'Kyle Harris',
                email: 'kyle@example.com',
                icon: '👤',
                membershipId: 'NY-204581',
                barNumber: '54821',
                role: 'member',
                plan: 'FREE', // FREE or PLUS
                admittedDate: '2018-03-15',
                cleCredits: {
                    required: 24,
                    earned: 16,
                    ethics: 4,
                    skills: 8,
                    practice: 4
                },
                bio: 'Kyle Harris is a dedicated attorney with over 6 years of experience in corporate law and mergers & acquisitions. Admitted to practice in New York in 2018, Kyle has successfully represented numerous Fortune 500 companies in complex transactions. He is an active member of the Business Law Section and regularly contributes to pro bono initiatives. Kyle graduated magna cum laude from Columbia Law School and holds a B.A. in Economics from NYU.'
            },
            joinedCommittees: ['Ethics Committee']
        };

        // Theme Configuration
        const themes = {
            nybar: {
                name: 'NY State Bar',
                logo: '🗽',
                primary: '#0047AB',
                primaryLight: '#2563EB',
                accent: '#0A0E1F',
                gradient: 'linear-gradient(180deg, #0047AB 0%, #2563EB 100%)'
            },
            nvbar: {
                name: 'Nevada Bar',
                logo: '🌵',
                primary: '#0369A1',
                primaryLight: '#0EA5E9',
                accent: '#0A0E1F',
                gradient: 'linear-gradient(180deg, #0369A1 0%, #0EA5E9 100%)'
            }
        };

        // Mock Database
        const db = {
            articles: [
                {
                    id: 'art1',
                    title: 'New Ethics Opinion: AI Use in Legal Practice',
                    excerpt: 'The Ethics Committee releases comprehensive guidance on using artificial intelligence tools in legal research and document drafting.',
                    content: 'The State Bar Ethics Committee has issued Opinion 1285, providing detailed guidance on the ethical use of artificial intelligence in legal practice. The opinion addresses key concerns including client confidentiality, competence requirements, and disclosure obligations.\n\nKey highlights include:\n• Attorneys must understand AI capabilities and limitations\n• Client data must not be input into public AI systems\n• AI-generated work requires thorough review and verification\n• Clients should be informed when AI tools are used substantively\n• Billing practices must reflect actual value provided\n\nThe committee emphasized that while AI can enhance efficiency, attorneys remain fully responsible for all work product. The duty of competence now extends to understanding the technology tools used in practice.\n\n"This opinion provides crucial guardrails for the profession as we navigate this technological shift," said Committee Chair Judge Patricia Williams. The full opinion is available in the member portal.',
                    author: 'Ethics Committee',
                    date: '2 hours ago',
                    category: 'Ethics',
                    icon: '⚖️'
                },
                {
                    id: 'art2',
                    title: 'Trial Skills Bootcamp Registration Opens',
                    excerpt: 'Intensive 3-day program for litigators seeking to enhance courtroom performance. Limited to 30 participants.',
                    content: 'Registration is now open for the highly acclaimed Trial Skills Bootcamp, scheduled for November 15-17 at the Downtown Legal Education Center. This intensive program combines lectures, demonstrations, and hands-on exercises.\n\nProgram highlights:\n• Opening statements and closing arguments workshop\n• Expert witness examination techniques\n• Technology in the courtroom\n• Jury selection strategies\n• Mock trial exercises with video review\n\nFaculty includes Judge Robert Chen (Ret.), renowned trial attorney Maria Santos, and jury consultant Dr. James Mitchell. Participants will receive 18 CLE credits including 4 ethics credits.\n\nEarly bird pricing of $795 available through October 31 (regularly $995). PLUS members receive an additional $100 discount. Space is limited to ensure personalized feedback.',
                    author: 'CLE Department',
                    date: '1 day ago',
                    category: 'Education',
                    icon: '🎓'
                },
                {
                    id: 'art3',
                    title: 'Legislative Update: Remote Notarization Bill Advances',
                    excerpt: 'Senate Bill 2847 would permanently authorize remote online notarization, building on pandemic-era temporary measures.',
                    content: 'The State Senate Judiciary Committee voted 7-2 to advance SB 2847, which would establish permanent authorization for remote online notarization (RON). The bill includes robust identity verification requirements and technology standards.\n\nKey provisions:\n• Multi-factor authentication requirements\n• Audio-visual recording retention for 10 years\n• Interstate recognition provisions\n• Technology security standards\n• Consumer protection safeguards\n\nThe Real Property Section has been actively involved in drafting the legislation, working to balance innovation with security concerns. Section Chair Thomas Anderson noted, "This represents a careful modernization of notarial practice while maintaining the integrity of the process."\n\nThe bill now moves to the full Senate for consideration. Members are encouraged to contact their representatives to express support.',
                    author: 'Legislative Affairs',
                    date: '3 days ago',
                    category: 'Legislation',
                    icon: '📜'
                },
                {
                    id: 'art4',
                    title: 'Pro Bono Spotlight: Immigration Clinic Success',
                    excerpt: 'October clinic assists 47 families with asylum applications, setting new monthly record for volunteer services.',
                    content: 'Last weekend\'s immigration clinic at the Community Legal Center marked a milestone in pro bono service, with 42 volunteer attorneys assisting 47 families with asylum and immigration matters.\n\nVolunteer coordinator Sarah Martinez reported: "The dedication of our members was extraordinary. We had attorneys drive from across the state to participate. Several families had been waiting months for legal assistance."\n\nHighlights:\n• 47 families received comprehensive legal consultations\n• 23 asylum applications prepared\n• 15 work authorization petitions filed\n• 12 attorneys earned pro bono service awards\n• 4 interpreters provided language support\n\nThe next clinic is scheduled for November 14. Training for new volunteers will be held November 7 via Zoom. No prior immigration experience required - mentoring provided.',
                    author: 'Pro Bono Committee',
                    date: '4 days ago',
                    category: 'Pro Bono',
                    icon: '🤝'
                }
            ],
            feedUpdates: [
                {
                    id: 'fu1',
                    type: 'event',
                    title: '🎉 New Event: Annual Gala Registration Open',
                    description: 'Join us for an evening of celebration on December 15th. Early bird pricing available.',
                    time: '2 hours ago'
                },
                {
                    id: 'fu2',
                    type: 'committee',
                    title: '🏛️ Criminal Justice Committee Meeting Minutes',
                    description: 'Review the latest policy recommendations and upcoming legislative priorities.',
                    time: '5 hours ago'
                },
                {
                    id: 'fu3',
                    type: 'member',
                    title: '👋 Welcome 23 New Members This Week',
                    description: 'The bar association continues to grow with attorneys from diverse practice areas.',
                    time: '1 day ago'
                }
            ],
            events: [
                {
                    id: 'e1',
                    title: 'Monthly CLE Lunch – AI in Legal Practice',
                    date: 'Oct 24, 12:00 PM',
                    location: 'Downtown Bar HQ',
                    description: 'Join us for an engaging discussion on the ethical and practical considerations of using AI tools in legal practice. Lunch will be provided.',
                    basePrice: 75,
                    memberDiscountPlus: 20,
                    credits: 2,
                    category: 'Ethics',
                    spotsLeft: 12,
                    speaker: 'Prof. Jennifer Chen, Tech Law Institute',
                    agenda: [
                        '12:00 PM - Registration & Lunch',
                        '12:30 PM - AI Fundamentals for Lawyers',
                        '1:15 PM - Ethical Considerations',
                        '2:00 PM - Q&A Session'
                    ]
                },
                {
                    id: 'e2',
                    title: 'Fall Networking Reception',
                    date: 'Nov 3, 6:30 PM',
                    location: 'Rooftop Lounge',
                    description: 'Connect with fellow members at our annual fall reception. Cocktails and hors d\'oeuvres will be served with stunning city views.',
                    basePrice: 45,
                    memberDiscountPlus: 10,
                    spotsLeft: 45
                },
                {
                    id: 'e3',
                    title: 'Pro Bono Immigration Clinic',
                    date: 'Oct 26, 10:00 AM',
                    location: 'Community Legal Center',
                    description: 'Volunteer to help families with immigration matters. Training provided for new volunteers. Spanish interpreters available.',
                    basePrice: 0,
                    memberDiscountPlus: 0,
                    credits: 4,
                    category: 'Pro Bono',
                    spotsLeft: 8
                }
            ],
            directory: [
                {
                    id: 'm1',
                    name: 'Kristin Watson',
                    firm: 'Watson & Associates',
                    areas: ['Family Law', 'Mediation'],
                    committees: ['Ethics Committee'],
                    icon: '👩‍⚖️',
                    membershipId: 'NY-200001',
                    barNumber: '100001',
                    role: 'member',
                    email: 'kwatson@watsonlaw.com',
                    phone: '(212) 555-0101',
                    admittedYear: '2010',
                    bio: 'Kristin Watson is a seasoned family law attorney and certified mediator with over 13 years of experience. She founded Watson & Associates in 2015, focusing on collaborative divorce and child custody matters. Kristin serves as Vice-Chair of the Ethics Committee and is a frequent speaker on legal ethics. She graduated from Harvard Law School and is admitted to practice in New York and Connecticut. Her approach emphasizes compassionate resolution while fiercely advocating for her clients\' best interests.'
                },
                {
                    id: 'm2',
                    name: 'Devon Lane',
                    firm: 'Lane Legal Group',
                    areas: ['Criminal Defense', 'Appeals'],
                    committees: ['Criminal Justice Committee'],
                    icon: '👨‍⚖️',
                    membershipId: 'NY-200002',
                    barNumber: '100002',
                    role: 'officer',
                    email: 'dlane@lanelegal.com',
                    phone: '(212) 555-0102',
                    admittedYear: '2008',
                    bio: 'Devon Lane is a prominent criminal defense attorney with a track record of success in high-profile cases. As a former prosecutor, he brings unique insights to defense strategy. Devon chairs the Criminal Justice Committee and has been instrumental in bail reform initiatives. He\'s argued before the State Supreme Court three times and maintains a 90% acquittal rate at trial. Devon graduated from Yale Law School and completed a judicial clerkship before entering private practice.'
                },
                {
                    id: 'm3',
                    name: 'Courtney Henry',
                    firm: 'Henry & Partners LLP',
                    areas: ['Corporate', 'M&A'],
                    committees: ['Business Law Section'],
                    icon: '👩‍💼',
                    membershipId: 'NY-200003',
                    barNumber: '100003',
                    role: 'member',
                    email: 'chenry@henrylaw.com',
                    phone: '(212) 555-0103',
                    admittedYear: '2012',
                    bio: 'Courtney Henry is a corporate attorney specializing in mergers, acquisitions, and securities law. She has facilitated over $2 billion in transactions for technology and healthcare companies. Courtney is an active member of the Business Law Section and regularly publishes on emerging issues in corporate governance. She graduated from Stanford Law School, where she was Editor-in-Chief of the Business Law Review. Prior to law, she worked as an investment banker at Goldman Sachs.'
                },
                {
                    id: 'm4',
                    name: 'Robert Chen',
                    firm: 'Chen Immigration Law',
                    areas: ['Immigration', 'International'],
                    committees: ['Immigration Law Committee', 'Pro Bono Committee'],
                    icon: '👨‍💼',
                    membershipId: 'NY-200004',
                    barNumber: '100004',
                    role: 'member',
                    email: 'rchen@chenimmigration.com',
                    phone: '(212) 555-0104',
                    admittedYear: '2009',
                    bio: 'Robert Chen is a dedicated immigration attorney who has helped over 500 families navigate the complex immigration system. Fluent in Mandarin and Spanish, he specializes in employment-based visas, asylum cases, and family reunification. Robert co-chairs the Pro Bono Committee and organizes monthly immigration clinics. He graduated from Georgetown Law and previously served as a legal advisor for the United Nations High Commissioner for Refugees.'
                },
                {
                    id: 'm5',
                    name: 'Sarah Martinez',
                    firm: 'Martinez & Co.',
                    areas: ['Real Estate', 'Zoning'],
                    committees: ['Real Property Committee'],
                    icon: '👩‍💼',
                    membershipId: 'NY-200005',
                    barNumber: '100005',
                    role: 'member',
                    email: 'smartinez@martinezlaw.com',
                    phone: '(212) 555-0105',
                    admittedYear: '2011',
                    bio: 'Sarah Martinez is a real estate attorney with expertise in commercial transactions, zoning law, and property development. She has represented major developers in projects totaling over $500 million. Sarah serves on the Real Property Committee and has been instrumental in drafting model lease agreements adopted statewide. She graduated from NYU Law School and holds a Master\'s in Urban Planning from MIT. Sarah is also a licensed real estate broker.'
                }
            ],
            committees: [
                {
                    id: 'c1',
                    name: 'Ethics Committee',
                    description: 'Professional responsibility, ethics opinions, and disciplinary matters',
                    members: 45,
                    meetingSchedule: 'Monthly, 2nd Tuesday',
                    chair: 'Judge Patricia Williams (Ret.)',
                    viceChair: 'Kristin Watson',
                    recentActivity: 'Published Opinion 1285 on AI use in legal practice',
                    committeeMembers: [
                        { name: 'Judge Patricia Williams (Ret.)', role: 'Chair', icon: '👩‍⚖️', firm: 'Judicial (Retired)' },
                        { name: 'Kristin Watson', role: 'Vice-Chair', icon: '👩‍⚖️', firm: 'Watson & Associates' },
                        { name: 'Michael Thompson', role: 'Member', icon: '👨‍⚖️', firm: 'Thompson Ethics Consulting' },
                        { name: 'Lisa Chang', role: 'Member', icon: '👩‍💼', firm: 'Chang & Associates' },
                        { name: 'David Kumar', role: 'Secretary', icon: '👨‍💼', firm: 'Kumar Law Office' }
                    ],
                    updates: [
                        { id: 'u1', title: 'Ethics Opinion 1285 Published', date: '2 days ago', content: 'New guidance on AI use in legal practice now available.' },
                        { id: 'u2', title: 'Quarterly Review Meeting', date: '1 week ago', content: 'Reviewed 12 ethics inquiries and issued 3 formal opinions.' },
                        { id: 'u3', title: 'Training Session Scheduled', date: '2 weeks ago', content: 'Ethics CLE training for new admittees on November 5th.' }
                    ],
                    events: [
                        { title: 'Ethics CLE: AI & Client Confidentiality', date: 'Nov 5, 2:00 PM', location: 'Virtual' },
                        { title: 'Annual Ethics Review', date: 'Dec 10, 9:00 AM', location: 'Conference Room A' }
                    ],
                    governance: {
                        charter: 'Established 1952 to maintain professional standards',
                        voting: 'Simple majority for opinions, 2/3 for policy changes',
                        terms: '3-year terms, renewable once',
                        subcommittees: ['Technology Ethics', 'Advertising Standards', 'Trust Accounting']
                    }
                },
                {
                    id: 'c2',
                    name: 'Criminal Justice Committee',
                    description: 'Criminal law policy, practice standards, and legislative advocacy',
                    members: 62,
                    meetingSchedule: 'Monthly, 3rd Wednesday',
                    chair: 'Devon Lane',
                    viceChair: 'Marcus Johnson',
                    recentActivity: 'Submitted recommendations on bail reform legislation',
                    committeeMembers: [
                        { name: 'Devon Lane', role: 'Chair', icon: '👨‍⚖️', firm: 'Lane Legal Group' },
                        { name: 'Marcus Johnson', role: 'Vice-Chair', icon: '👨‍⚖️', firm: 'Public Defender\'s Office' },
                        { name: 'Angela Rodriguez', role: 'Member', icon: '👩‍⚖️', firm: 'District Attorney\'s Office' },
                        { name: 'James Wilson', role: 'Member', icon: '👨‍💼', firm: 'Wilson Criminal Defense' },
                        { name: 'Tanya Patel', role: 'Member', icon: '👩‍💼', firm: 'Patel & Associates' }
                    ],
                    updates: [
                        { id: 'u1', title: 'Bail Reform Recommendations Submitted', date: '3 days ago', content: 'Comprehensive proposal sent to legislature.' },
                        { id: 'u2', title: 'Indigent Defense Standards Updated', date: '1 week ago', content: 'New guidelines for public defender caseloads.' },
                        { id: 'u3', title: 'Sentencing Guidelines Review', date: '2 weeks ago', content: 'Committee reviewing proposed changes to sentencing matrix.' }
                    ],
                    events: [
                        { title: 'Criminal Practice CLE', date: 'Nov 12, 1:00 PM', location: 'Courthouse Annex' },
                        { title: 'Legislative Strategy Session', date: 'Nov 20, 3:00 PM', location: 'Virtual' }
                    ],
                    governance: {
                        charter: 'Reformed in 2010 to address criminal justice reform',
                        voting: 'Consensus-based decision making',
                        terms: '2-year terms, no term limits',
                        subcommittees: ['Sentencing Reform', 'Indigent Defense', 'Victim Rights']
                    }
                },
                {
                    id: 'c3',
                    name: 'Business Law Section',
                    description: 'Corporate transactions, securities, and business entity law',
                    members: 128,
                    meetingSchedule: 'Quarterly',
                    chair: 'Thomas Anderson',
                    viceChair: 'Courtney Henry',
                    recentActivity: 'Released guidance on remote shareholder meetings',
                    committeeMembers: [
                        { name: 'Thomas Anderson', role: 'Chair', icon: '👨‍💼', firm: 'Anderson Corporate Law' },
                        { name: 'Courtney Henry', role: 'Vice-Chair', icon: '👩‍💼', firm: 'Henry & Partners LLP' },
                        { name: 'Richard Stone', role: 'Treasurer', icon: '👨‍⚖️', firm: 'Stone Securities Law' },
                        { name: 'Emily Davis', role: 'Member', icon: '👩‍💼', firm: 'Davis M&A Advisors' }
                    ],
                    updates: [
                        { id: 'u1', title: 'Remote Shareholder Meeting Guide', date: '1 day ago', content: 'Best practices for virtual corporate governance.' },
                        { id: 'u2', title: 'Securities Regulation Update', date: '5 days ago', content: 'SEC rule changes affecting private placements.' },
                        { id: 'u3', title: 'M&A Market Report', date: '1 week ago', content: 'Q3 transaction trends and outlook.' }
                    ],
                    events: [
                        { title: 'Corporate Governance Summit', date: 'Nov 8, 9:00 AM', location: 'Financial District' },
                        { title: 'Securities Law Update', date: 'Dec 2, 2:00 PM', location: 'Virtual' }
                    ],
                    governance: {
                        charter: 'Largest section, established 1975',
                        voting: 'Executive committee makes operational decisions',
                        terms: '3-year terms for officers',
                        subcommittees: ['Securities', 'M&A', 'Corporate Governance', 'Startups']
                    }
                },
                {
                    id: 'c4',
                    name: 'Pro Bono Committee',
                    description: 'Coordinate volunteer legal services and access to justice initiatives',
                    members: 89,
                    meetingSchedule: 'Monthly, 1st Thursday',
                    chair: 'Maria Santos',
                    viceChair: 'Robert Chen',
                    recentActivity: 'October clinic served 47 families',
                    committeeMembers: [
                        { name: 'Maria Santos', role: 'Chair', icon: '👩‍⚖️', firm: 'Legal Aid Society' },
                        { name: 'Robert Chen', role: 'Vice-Chair', icon: '👨‍💼', firm: 'Chen Immigration Law' },
                        { name: 'Jennifer Park', role: 'Coordinator', icon: '👩‍💼', firm: 'Park Public Interest Law' },
                        { name: 'William Brown', role: 'Member', icon: '👨‍⚖️', firm: 'Brown & Associates' }
                    ],
                    updates: [
                        { id: 'u1', title: 'Record Month: 47 Families Served', date: '4 days ago', content: 'October clinic exceeded all expectations.' },
                        { id: 'u2', title: 'New Partnership with Legal Aid', date: '1 week ago', content: 'Expanding services to underserved communities.' },
                        { id: 'u3', title: 'Volunteer Training Materials Updated', date: '2 weeks ago', content: 'New resources for first-time volunteers.' }
                    ],
                    events: [
                        { title: 'Immigration Clinic', date: 'Nov 14, 10:00 AM', location: 'Community Center' },
                        { title: 'Volunteer Training', date: 'Nov 7, 6:00 PM', location: 'Virtual' }
                    ],
                    governance: {
                        charter: 'Established to fulfill pro bono obligations',
                        voting: 'All members have equal voting rights',
                        terms: '2-year renewable terms',
                        subcommittees: ['Immigration', 'Housing', 'Family Law', 'Veterans Affairs']
                    }
                }
            ],
            community: [
                {
                    id: 'p1',
                    author: 'Devon Lane',
                    body: 'Who\'s attending the AI in Legal Practice CLE lunch next week? Would love to connect!',
                    time: '3h',
                    likes: 12,
                    replies: 5
                },
                {
                    id: 'p2',
                    author: 'Courtney Henry',
                    body: 'Looking for recommendations on contract management software for mid-size firms. What are you using?',
                    time: '1d',
                    likes: 8,
                    replies: 14
                }
            ]
        };

        // Helper Functions
        function getEventPrice(event) {
            if (event.basePrice === 0) return 0;
            return state.user.plan === 'PLUS' 
                ? Math.max(event.basePrice - event.memberDiscountPlus, 0) 
                : event.basePrice;
        }

        function formatDate(date) {
            return new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
        }

        // UI Functions
        function switchOrg(org) {
            state.currentOrg = org;
            const theme = themes[org];
            
            // Update theme
            document.documentElement.style.setProperty('--primary', theme.primary);
            document.documentElement.style.setProperty('--primary-light', theme.primaryLight);
            document.documentElement.style.setProperty('--gradient', theme.gradient);
            
            // Update branding
            document.getElementById('brandLogo').textContent = theme.logo;
            document.getElementById('brandName').textContent = theme.name;
            
            // Update membership ID
            state.user.membershipId = org === 'nybar' ? 'NY-204581' : 'NV-104233';
            
            // Re-render current tab
            renderTab(state.currentTab);
        }

        function switchTab(tab, button) {
            state.currentTab = tab;
            state.currentCommittee = null;
            
            // Update tab bar
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            if (button) button.classList.add('active');
            
            // Render content
            renderTab(tab);
        }

        function renderTab(tab) {
            const content = document.getElementById('content');
            
            if (state.currentCommittee) {
                renderCommitteeProfile(content, state.currentCommittee);
                return;
            }
            
            switch (tab) {
                case 'home':
                    renderHome(content);
                    break;
                case 'feed':
                    renderFeed(content);
                    break;
                case 'directory':
                    renderDirectory(content);
                    break;
                case 'events':
                    renderEvents(content);
                    break;
                case 'community':
                    renderCommunity(content);
                    break;
                case 'committees':
                    renderCommittees(content);
                    break;
                case 'profile':
                    renderProfile(content);
                    break;
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Render Functions
        function renderHome(container) {
            const theme = themes[state.currentOrg];
            
            container.innerHTML = `
                <!-- Hero Card -->
                <div class="hero-card">
                    <div class="hero-header">
                        <div class="hero-user" onclick="renderProfile(document.getElementById('content')); switchTab('profile');">
                            <div class="icon-avatar icon-avatar-white">
                                <span>${state.user.icon}</span>
                            </div>
                            <div>
                                <div style="font-size: 12px; opacity: 0.9;">Welcome back</div>
                                <div style="font-weight: 700; font-size: 18px;">${state.user.name.split(' ')[0]}, view your profile →</div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 8px;">
                            <span class="chip chip-${state.user.plan === 'PLUS' ? 'success' : 'warning'}" style="background: rgba(255,255,255,0.2); color: white;">
                                ${state.user.plan}
                            </span>
                        </div>
                    </div>
                    <div class="hero-badges">
                        <span class="chip chip-white">ID: ${state.user.membershipId}</span>
                        <span class="chip chip-white">Bar #${state.user.barNumber}</span>
                        <span class="chip chip-white">Admitted: ${formatDate(state.user.admittedDate)}</span>
                    </div>
                </div>

                <!-- CLE Progress -->
                <div class="card">
                    <div class="flex justify-between items-center">
                        <div class="card-title">CLE Progress</div>
                        <span class="chip chip-${state.user.cleCredits.earned >= state.user.cleCredits.required ? 'success' : 'warning'}">
                            ${state.user.cleCredits.earned}/${state.user.cleCredits.required} Credits
                        </span>
                    </div>
                    <div class="progress-bar mt-1">
                        <div class="progress-fill" style="width: ${(state.user.cleCredits.earned / state.user.cleCredits.required) * 100}%"></div>
                    </div>
                    <div class="flex gap-1 mt-1">
                        <span class="chip chip-muted">Ethics: ${state.user.cleCredits.ethics}/4</span>
                        <span class="chip chip-muted">Skills: ${state.user.cleCredits.skills}/8</span>
                        <span class="chip chip-muted">Practice: ${state.user.cleCredits.practice}/12</span>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="grid mt-2">
                    <div class="card card-clickable" onclick="switchTab('events'); document.querySelector('.tab-button:nth-child(3)').classList.remove('active');">
                        <div class="card-title">📅 Events & CLE</div>
                        <div class="card-subtitle">Browse programs and RSVP – members save up to $100</div>
                    </div>
                    
                    <div class="card card-clickable" onclick="switchTab('directory'); document.querySelector('.tab-button:nth-child(2)').click();">
                        <div class="card-title">👥 Member Directory</div>
                        <div class="card-subtitle">Connect with ${db.directory.length}+ attorneys by practice area</div>
                    </div>
                    
                    <div class="card card-clickable" onclick="switchTab('committees'); document.querySelector('.tab-button:nth-child(5)').click();">
                        <div class="card-title">🏛️ Committees & Sections</div>
                        <div class="card-subtitle">Join specialized groups and shape policy</div>
                    </div>
                    
                    <div class="card card-clickable" onclick="showClaimModal()">
                        <div class="card-title">✓ Verify Membership</div>
                        <div class="card-subtitle">Update your bar credentials and contact info</div>
                    </div>
                </div>

                <!-- Upcoming Events -->
                <div class="section-header">
                    <h3 class="section-title">🎯 Upcoming Events</h3>
                    <a class="section-link" onclick="switchTab('events')">See all</a>
                </div>
                
                ${db.events.slice(0, 2).map(event => {
                    const price = getEventPrice(event);
                    return `
                        <div class="card card-clickable" onclick="showEventModal('${event.id}')">
                            <div class="event-header">
                                <div>
                                    <div class="card-title">${event.title}</div>
                                    <div class="card-subtitle">${event.date} · ${event.location}</div>
                                    ${event.credits ? `<span class="chip chip-info mt-1">${event.credits} CLE Credits</span>` : ''}
                                </div>
                                <div style="text-align: right;">
                                    <span class="chip chip-${price ? 'default' : 'success'}">
                                        ${price ? `$${price}` : 'FREE'}
                                    </span>
                                    ${state.user.plan === 'PLUS' && event.memberDiscountPlus ? 
                                        `<div style="font-size: 11px; color: var(--success); margin-top: 4px;">Save $${event.memberDiscountPlus}</div>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            `;
        }

        function renderFeed(container) {
            container.innerHTML = `
                <div class="section-header">
                    <h3 class="section-title">📰 Legal News & Updates</h3>
                </div>

                <!-- Quick Updates -->
                <div style="margin-bottom: 16px;">
                    ${db.feedUpdates.map(update => `
                        <div class="card">
                            <div class="flex items-center justify-between">
                                <div>
                                    <div style="font-weight: 700; font-size: 14px;">${update.title}</div>
                                    <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                                        ${update.description}
                                    </div>
                                </div>
                            </div>
                            <div style="font-size: 11px; color: var(--text-muted); margin-top: 8px;">${update.time}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="section-header">
                    <h3 class="section-title">📚 Featured Articles</h3>
                </div>

                <!-- Articles -->
                ${db.articles.map(article => `
                    <div class="article-card" onclick="showArticleModal('${article.id}')">
                        <div class="article-image">
                            <span>${article.icon}</span>
                        </div>
                        <div class="article-content">
                            <h3 class="card-title">${article.title}</h3>
                            <p style="font-size: 14px; color: var(--text-secondary); margin-top: 8px;">
                                ${article.excerpt}
                            </p>
                            <div class="article-meta">
                                <span class="chip chip-default">${article.category}</span>
                                <span>•</span>
                                <span>${article.author}</span>
                                <span>•</span>
                                <span>${article.date}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            `;
        }

        function renderDirectory(container) {
            container.innerHTML = `
                <div class="card mb-2">
                    <input type="text" class="input" placeholder="Search members, firms, or practice areas..." 
                           onkeyup="filterDirectory(this.value)">
                    <div class="grid grid-2 gap-1 mt-2">
                        <select class="select" onchange="filterByArea(this.value)">
                            <option value="">All Practice Areas</option>
                            <option>Corporate</option>
                            <option>Criminal Defense</option>
                            <option>Family Law</option>
                            <option>Immigration</option>
                            <option>Real Estate</option>
                        </select>
                        <select class="select" onchange="filterByCommittee(this.value)">
                            <option value="">All Committees</option>
                            ${db.committees.map(c => `<option>${c.name}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <div id="directoryList">
                    ${db.directory.map(member => `
                        <div class="card card-clickable" onclick="showMemberModal('${member.id}')">
                            <div class="member-card">
                                <div class="icon-avatar">
                                    <span>${member.icon}</span>
                                </div>
                                <div class="member-info">
                                    <div class="member-name">${member.name}</div>
                                    <div class="member-firm">${member.firm}</div>
                                    <div class="member-badges">
                                        ${member.areas.map(area => `<span class="chip chip-muted">${area}</span>`).join('')}
                                    </div>
                                    <div class="flex gap-1 mt-1">
                                        <span class="chip chip-muted" style="font-size: 11px;">ID: ${member.membershipId}</span>
                                        <span class="chip chip-muted" style="font-size: 11px;">Bar: ${member.barNumber}</span>
                                    </div>
                                </div>
                                <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); showContactModal('${member.id}')">
                                    Contact
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        function renderEvents(container) {
            container.innerHTML = `
                <div class="section-header">
                    <h3 class="section-title">📅 Events & CLE Programs</h3>
                    <span class="chip chip-${state.user.plan === 'PLUS' ? 'success' : 'warning'}">
                        Plan: ${state.user.plan}
                    </span>
                </div>

                ${db.events.map(event => {
                    const price = getEventPrice(event);
                    const savings = state.user.plan === 'PLUS' ? event.memberDiscountPlus : 0;
                    
                    return `
                        <div class="card card-clickable" onclick="showEventModal('${event.id}')">
                            <div class="event-header">
                                <div>
                                    <div class="card-title">${event.title}</div>
                                    <div class="card-subtitle">${event.date} · ${event.location}</div>
                                    <div class="flex gap-1 mt-1">
                                        ${event.credits ? `<span class="chip chip-info">${event.credits} CLE Credits - ${event.category}</span>` : ''}
                                        <span class="chip chip-muted">${event.spotsLeft} spots left</span>
                                    </div>
                                </div>
                                <div style="text-align: right;">
                                    <span class="chip chip-${price ? 'default' : 'success'}">
                                        ${price ? `$${price}` : 'FREE'}
                                    </span>
                                    ${savings ? `
                                        <div style="font-size: 11px; margin-top: 4px;">
                                            <span style="text-decoration: line-through; color: var(--text-muted);">$${event.basePrice}</span>
                                            <span style="color: var(--success); font-weight: 600;">Save $${savings}</span>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            `;
        }

        function renderCommunity(container) {
            container.innerHTML = `
                <div class="card mb-2">
                    <div class="flex gap-1">
                        <input type="text" class="input" placeholder="Share an update or ask a question..." 
                               id="postInput">
                        <button class="btn btn-primary" onclick="createPost()">Post</button>
                    </div>
                </div>

                <div id="communityFeed">
                    ${db.community.map(post => `
                        <div class="card">
                            <div class="post-author">${post.author}</div>
                            <div class="post-body">${post.body}</div>
                            <div class="flex justify-between items-center mt-2">
                                <div class="post-time">${post.time} ago</div>
                                <div class="flex gap-2">
                                    <button class="btn btn-sm btn-secondary">
                                        👍 ${post.likes}
                                    </button>
                                    <button class="btn btn-sm btn-secondary">
                                        💬 ${post.replies}
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        function renderCommittees(container) {
            container.innerHTML = `
                <div class="section-header">
                    <h3 class="section-title">🏛️ Committees & Governance</h3>
                    <span class="chip chip-muted">Joined: ${state.joinedCommittees.length}</span>
                </div>

                ${db.committees.map(committee => {
                    const isJoined = state.joinedCommittees.includes(committee.name);
                    
                    return `
                        <div class="card card-clickable" onclick="openCommitteeProfile('${committee.id}')">
                            <div class="flex justify-between items-center">
                                <div style="flex: 1; margin-right: 12px;">
                                    <div class="card-title">${committee.name}</div>
                                    <div class="card-subtitle">${committee.description}</div>
                                    <div class="flex gap-1 mt-2">
                                        <span class="chip chip-muted">${committee.members} members</span>
                                        <span class="chip chip-muted">Chair: ${committee.chair}</span>
                                    </div>
                                    <div class="card-subtitle mt-1">📅 ${committee.meetingSchedule}</div>
                                    ${committee.recentActivity ? `
                                        <div style="margin-top: 8px; padding: 8px; background: var(--bg); border-radius: 6px;">
                                            <div style="font-size: 12px; font-weight: 600;">Recent:</div>
                                            <div style="font-size: 12px; color: var(--text-secondary);">${committee.recentActivity}</div>
                                        </div>
                                    ` : ''}
                                </div>
                                <div style="display: flex; align-items: flex-start;">
                                    <button class="btn btn-sm ${isJoined ? 'btn-secondary' : 'btn-primary'}" 
                                            onclick="event.stopPropagation(); toggleCommittee('${committee.name}')">
                                        ${isJoined ? 'Leave' : 'Join'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            `;
        }

        function renderCommitteeProfile(container, committeeId) {
            const committee = db.committees.find(c => c.id === committeeId);
            const isJoined = state.joinedCommittees.includes(committee.name);
            
            container.innerHTML = `
                <button class="back-button" onclick="state.currentCommittee = null; switchTab('committees', document.querySelector('.tab-button:nth-child(5)'));">
                    ← Back to Committees
                </button>

                <div class="card" style="background: var(--gradient); color: white;">
                    <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">${committee.name}</h2>
                    <p style="opacity: 0.9; font-size: 14px;">${committee.description}</p>
                    <div class="flex gap-1 mt-2">
                        <span class="chip chip-white">${committee.members} Members</span>
                        <span class="chip chip-white">📅 ${committee.meetingSchedule}</span>
                    </div>
                    <div style="margin-top: 12px;">
                        <button class="btn ${isJoined ? 'btn-secondary' : ''}" 
                                style="${isJoined ? 'background: white; color: var(--primary);' : 'background: rgba(255,255,255,0.2); color: white;'}"
                                onclick="toggleCommittee('${committee.name}')">
                            ${isJoined ? '✓ Joined' : '+ Join Committee'}
                        </button>
                    </div>
                </div>

                <!-- Committee Tabs -->
                <div class="committee-tabs">
                    <button class="committee-tab ${state.committeeTab === 'updates' ? 'active' : ''}" 
                            onclick="state.committeeTab='updates'; renderCommitteeProfile(document.getElementById('content'), '${committeeId}')">
                        Updates
                    </button>
                    <button class="committee-tab ${state.committeeTab === 'events' ? 'active' : ''}" 
                            onclick="state.committeeTab='events'; renderCommitteeProfile(document.getElementById('content'), '${committeeId}')">
                        Events
                    </button>
                    <button class="committee-tab ${state.committeeTab === 'members' ? 'active' : ''}" 
                            onclick="state.committeeTab='members'; renderCommitteeProfile(document.getElementById('content'), '${committeeId}')">
                        Members
                    </button>
                    <button class="committee-tab ${state.committeeTab === 'governance' ? 'active' : ''}" 
                            onclick="state.committeeTab='governance'; renderCommitteeProfile(document.getElementById('content'), '${committeeId}')">
                        Governance
                    </button>
                </div>

                <div id="committeeTabContent">
                    ${state.committeeTab === 'updates' ? `
                        <div>
                            ${committee.updates ? committee.updates.map(update => `
                                <div class="card">
                                    <div class="card-title">${update.title}</div>
                                    <div style="font-size: 12px; color: var(--text-secondary); margin: 4px 0;">${update.date}</div>
                                    <p style="font-size: 14px; color: var(--text-secondary);">${update.content}</p>
                                </div>
                            `).join('') : '<p style="padding: 16px; text-align: center; color: var(--text-secondary);">No recent updates</p>'}
                        </div>
                    ` : ''}

                    ${state.committeeTab === 'events' ? `
                        <div>
                            ${committee.events ? committee.events.map(event => `
                                <div class="card">
                                    <div class="card-title">${event.title}</div>
                                    <div class="card-subtitle">${event.date} · ${event.location}</div>
                                    <button class="btn btn-sm btn-primary mt-2">Register</button>
                                </div>
                            `).join('') : '<p style="padding: 16px; text-align: center; color: var(--text-secondary);">No upcoming events</p>'}
                        </div>
                    ` : ''}

                    ${state.committeeTab === 'members' ? `
                        <div>
                            <div class="card">
                                <div style="font-weight: 600; margin-bottom: 12px;">Leadership</div>
                                <div style="display: flex; flex-direction: column; gap: 12px;">
                                    <div class="flex items-center gap-2">
                                        <div class="icon-avatar icon-avatar-small">
                                            <span>👩‍⚖️</span>
                                        </div>
                                        <div style="flex: 1;">
                                            <div style="font-weight: 600; font-size: 14px;">${committee.chair}</div>
                                            <div style="font-size: 12px; color: var(--text-secondary);">Chair</div>
                                        </div>
                                    </div>
                                    ${committee.viceChair ? `
                                        <div class="flex items-center gap-2">
                                            <div class="icon-avatar icon-avatar-small">
                                                <span>${committee.viceChair.includes('Kristin') || committee.viceChair.includes('Courtney') ? '👩‍⚖️' : '👨‍⚖️'}</span>
                                            </div>
                                            <div style="flex: 1;">
                                                <div style="font-weight: 600; font-size: 14px;">${committee.viceChair}</div>
                                                <div style="font-size: 12px; color: var(--text-secondary);">Vice-Chair</div>
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>

                            ${committee.committeeMembers && committee.committeeMembers.length > 2 ? `
                                <div class="card">
                                    <div style="font-weight: 600; margin-bottom: 12px;">Members</div>
                                    ${committee.committeeMembers.slice(2).map(member => `
                                        <div class="flex items-center gap-2" style="margin-bottom: 12px;">
                                            <div class="icon-avatar icon-avatar-small">
                                                <span>${member.icon}</span>
                                            </div>
                                            <div style="flex: 1;">
                                                <div style="font-weight: 600; font-size: 14px;">${member.name}</div>
                                                <div style="font-size: 12px; color: var(--text-secondary);">
                                                    ${member.role} · ${member.firm}
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    ` : ''}

                    ${state.committeeTab === 'governance' ? `
                        <div>
                            ${committee.governance ? `
                                <div class="governance-card">
                                    <div class="governance-title">Charter & History</div>
                                    <div class="governance-item">• ${committee.governance.charter}</div>
                                </div>

                                <div class="governance-card">
                                    <div class="governance-title">Voting Procedures</div>
                                    <div class="governance-item">• ${committee.governance.voting}</div>
                                </div>

                                <div class="governance-card">
                                    <div class="governance-title">Terms of Service</div>
                                    <div class="governance-item">• ${committee.governance.terms}</div>
                                </div>

                                ${committee.governance.subcommittees ? `
                                    <div class="governance-card">
                                        <div class="governance-title">Subcommittees</div>
                                        ${committee.governance.subcommittees.map(sub => `
                                            <div class="governance-item">• ${sub}</div>
                                        `).join('')}
                                    </div>
                                ` : ''}

                                <div class="governance-card">
                                    <div class="governance-title">Meeting Schedule</div>
                                    <div class="governance-item">• ${committee.meetingSchedule}</div>
                                    <div class="governance-item">• Meetings are open to all members</div>
                                    <div class="governance-item">• Minutes posted within 48 hours</div>
                                </div>
                            ` : '<p style="padding: 16px; text-align: center; color: var(--text-secondary);">Governance information not available</p>'}
                        </div>
                    ` : ''}
                </div>
            `;
        }

        function renderProfile(container) {
            const theme = themes[state.currentOrg];
            
            container.innerHTML = `
                <!-- Profile Header -->
                <div class="hero-card">
                    <div class="flex gap-2 items-center">
                        <div class="icon-avatar icon-avatar-large icon-avatar-white">
                            <span>${state.user.icon}</span>
                        </div>
                        <div>
                            <div style="opacity: 0.9; font-size: 12px;">Your Profile</div>
                            <div style="font-weight: 700; font-size: 22px;">${state.user.name}</div>
                            <div class="flex gap-1 mt-1">
                                <span class="chip chip-${state.user.plan === 'PLUS' ? 'success' : 'warning'}" 
                                      style="background: rgba(255,255,255,0.2); color: white;">
                                    Plan: ${state.user.plan}
                                </span>
                                <span class="chip chip-white">Role: ${state.user.role}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bio Card -->
                <div class="card">
                    <div class="card-title mb-2">About</div>
                    <p style="font-size: 14px; line-height: 1.6; color: var(--text-secondary);">
                        ${state.user.bio}
                    </p>
                </div>

                <!-- Membership Card -->
                <div class="card">
                    <div class="card-title mb-2">Membership Details</div>
                    <div class="grid gap-1">
                        <div class="flex justify-between">
                            <span style="color: var(--text-secondary);">Membership ID</span>
                            <span style="font-weight: 600;">${state.user.membershipId}</span>
                        </div>
                        <div class="flex justify-between">
                            <span style="color: var(--text-secondary);">Bar Number</span>
                            <span style="font-weight: 600;">${state.user.barNumber}</span>
                        </div>
                        <div class="flex justify-between">
                            <span style="color: var(--text-secondary);">Admitted</span>
                            <span style="font-weight: 600;">${formatDate(state.user.admittedDate)}</span>
                        </div>
                        <div class="flex justify-between">
                            <span style="color: var(--text-secondary);">Email</span>
                            <span style="font-weight: 600;">${state.user.email}</span>
                        </div>
                    </div>
                    <div class="grid gap-1 mt-3">
                        <button class="btn btn-primary" onclick="togglePlan()">
                            ${state.user.plan === 'FREE' ? 'Upgrade to PLUS ($29/mo)' : 'Switch to FREE'}
                        </button>
                        <button class="btn btn-secondary" onclick="showClaimModal()">Update Credentials</button>
                    </div>
                </div>

                <!-- Settings -->
                <div class="card">
                    <div class="card-title mb-2">Settings & Support</div>
                    <div class="grid gap-1">
                        <button class="btn btn-secondary">Notification Preferences</button>
                        <button class="btn btn-secondary">Privacy Settings</button>
                        <button class="btn btn-secondary">Ethics Hotline</button>
                        <button class="btn btn-secondary">Contact Support</button>
                    </div>
                </div>
            `;
        }

        // Committee Functions
        function openCommitteeProfile(committeeId) {
            state.currentCommittee = committeeId;
            state.committeeTab = 'updates';
            renderCommitteeProfile(document.getElementById('content'), committeeId);
        }

        // Modal Functions
        function showEventModal(eventId) {
            const event = db.events.find(e => e.id === eventId);
            const price = getEventPrice(event);
            
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal" style="position: relative;">
                    <button class="modal-close" onclick="closeModal()">✕</button>
                    <div class="modal-title">${event.title}</div>
                    <div class="modal-subtitle">${event.date} · ${event.location}</div>
                    
                    <div class="card mt-2" style="background: var(--bg);">
                        <p style="font-size: 14px; line-height: 1.6;">
                            ${event.description}
                        </p>
                    </div>

                    ${event.speaker ? `
                        <div class="card mt-2">
                            <div style="font-weight: 600; margin-bottom: 4px;">Speaker</div>
                            <div style="font-size: 14px;">${event.speaker}</div>
                        </div>
                    ` : ''}

                    ${event.agenda ? `
                        <div class="card mt-2">
                            <div style="font-weight: 600; margin-bottom: 8px;">Agenda</div>
                            ${event.agenda.map(item => `
                                <div style="font-size: 14px; margin-bottom: 4px;">• ${item}</div>
                            `).join('')}
                        </div>
                    ` : ''}

                    ${event.credits ? `
                        <div class="card mt-2" style="background: var(--info-bg);">
                            <div class="flex items-center gap-2">
                                <span style="font-size: 20px;">🎓</span>
                                <div>
                                    <div style="font-weight: 600;">${event.credits} CLE Credits</div>
                                    <div style="font-size: 12px;">Category: ${event.category}</div>
                                </div>
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="card mt-2">
                        <div class="flex justify-between items-center">
                            <div>
                                <div style="font-size: 12px; color: var(--text-secondary);">Registration Fee</div>
                                ${price ? `
                                    ${state.user.plan === 'PLUS' && event.memberDiscountPlus ? `
                                        <div style="text-decoration: line-through; color: var(--text-muted); font-size: 14px;">$${event.basePrice}</div>
                                    ` : ''}
                                    <div style="font-weight: 700; font-size: 24px;">$${price}</div>
                                ` : '<div style="font-weight: 700; font-size: 24px; color: var(--success);">FREE</div>'}
                            </div>
                            <div style="text-align: right;">
                                <div class="chip chip-muted">${event.spotsLeft} spots left</div>
                                ${state.user.plan === 'PLUS' && event.memberDiscountPlus ? `
                                    <div style="color: var(--success); font-size: 12px; margin-top: 4px;">PLUS savings: $${event.memberDiscountPlus}</div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid gap-2 mt-3">
                        <button class="btn btn-primary btn-block" onclick="showRSVPModal('${event.id}')">
                            Register Now
                        </button>
                        <button class="btn btn-secondary btn-block" onclick="closeModal()">Close</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        function showArticleModal(articleId) {
            const article = db.articles.find(a => a.id === articleId);
            
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal" style="position: relative; max-width: 600px;">
                    <button class="modal-close" onclick="closeModal()">✕</button>
                    
                    <div style="background: var(--gradient); margin: -20px -20px 16px; padding: 40px 20px; border-radius: 8px 8px 0 0; text-align: center;">
                        <span style="font-size: 48px;">${article.icon}</span>
                    </div>
                    
                    <div class="modal-title">${article.title}</div>
                    
                    <div class="article-meta" style="margin: 12px 0;">
                        <span class="chip chip-default">${article.category}</span>
                        <span>•</span>
                        <span>${article.author}</span>
                        <span>•</span>
                        <span>${article.date}</span>
                    </div>
                    
                    <div style="font-size: 14px; line-height: 1.8; color: var(--text-secondary); white-space: pre-line;">
                        ${article.content}
                    </div>
                    
                    <div class="grid gap-2 mt-3">
                        <button class="btn btn-primary btn-block">Share Article</button>
                        <button class="btn btn-secondary btn-block" onclick="closeModal()">Close</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        function showMemberModal(memberId) {
            const member = db.directory.find(m => m.id === memberId);
            
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal" style="position: relative;">
                    <button class="modal-close" onclick="closeModal()">✕</button>
                    
                    <div style="text-align: center; margin-bottom: 16px;">
                        <div class="icon-avatar icon-avatar-large" style="margin: 0 auto;">
                            <span>${member.icon}</span>
                        </div>
                    </div>
                    
                    <div class="modal-title" style="text-align: center;">${member.name}</div>
                    <div class="modal-subtitle" style="text-align: center;">${member.firm}</div>
                    
                    <div class="flex gap-1 justify-center mt-2" style="justify-content: center;">
                        ${member.areas.map(area => `<span class="chip chip-default">${area}</span>`).join('')}
                    </div>

                    <div class="card mt-3" style="background: var(--bg);">
                        <div style="font-weight: 600; margin-bottom: 8px;">Professional Background</div>
                        <p style="font-size: 14px; line-height: 1.6; color: var(--text-secondary);">
                            ${member.bio}
                        </p>
                    </div>

                    <div class="card mt-2">
                        <div style="font-weight: 600; margin-bottom: 8px;">Contact Information</div>
                        <div class="grid gap-1" style="font-size: 14px;">
                            <div class="flex justify-between">
                                <span style="color: var(--text-secondary);">Email</span>
                                <span>${member.email}</span>
                            </div>
                            <div class="flex justify-between">
                                <span style="color: var(--text-secondary);">Phone</span>
                                <span>${member.phone}</span>
                            </div>
                            <div class="flex justify-between">
                                <span style="color: var(--text-secondary);">Bar #</span>
                                <span>${member.barNumber}</span>
                            </div>
                            <div class="flex justify-between">
                                <span style="color: var(--text-secondary);">Admitted</span>
                                <span>${member.admittedYear}</span>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-2">
                        <div style="font-weight: 600; margin-bottom: 8px;">Committee Involvement</div>
                        <div class="flex gap-1">
                            ${member.committees.map(com => `<span class="chip chip-muted">${com}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="grid gap-2 mt-3">
                        <button class="btn btn-primary btn-block" onclick="window.location.href='mailto:${member.email}'">
                            Send Email
                        </button>
                        <button class="btn btn-secondary btn-block" onclick="closeModal()">Close</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        function showRSVPModal(eventId) {
            const event = db.events.find(e => e.id === eventId);
            const price = getEventPrice(event);
            
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal">
                    <div class="modal-title">Complete Registration</div>
                    <div class="modal-subtitle">${event.title}</div>
                    
                    <div class="card mt-2">
                        <div class="flex justify-between items-center">
                            <span>Registration Fee</span>
                            <div style="text-align: right;">
                                ${price ? `
                                    <div style="font-weight: 700; font-size: 20px;">$${price}</div>
                                    ${state.user.plan === 'PLUS' && event.memberDiscountPlus ? `
                                        <div style="color: var(--success); font-size: 12px;">PLUS member price</div>
                                    ` : ''}
                                ` : '<div style="font-weight: 700; font-size: 20px; color: var(--success);">FREE</div>'}
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid gap-2 mt-3">
                        ${price ? `
                            <input type="text" class="input" placeholder="Cardholder Name">
                            <input type="text" class="input" placeholder="Card Number">
                            <div class="grid grid-2 gap-1">
                                <input type="text" class="input" placeholder="MM/YY">
                                <input type="text" class="input" placeholder="CVV">
                            </div>
                        ` : ''}
                        <button class="btn btn-primary btn-block" onclick="completeRSVP()">
                            ${price ? 'Complete Payment' : 'Confirm Registration'}
                        </button>
                        <button class="btn btn-secondary btn-block" onclick="closeModal()">Cancel</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        function showClaimModal() {
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal">
                    <div class="modal-title">Verify Your Membership</div>
                    <div class="modal-subtitle">Update your bar credentials and contact information</div>
                    <div class="grid gap-2">
                        <input type="text" class="input" placeholder="Bar Number" value="${state.user.barNumber}">
                        <input type="text" class="input" placeholder="Last Name" value="Harris">
                        <input type="email" class="input" placeholder="Email" value="${state.user.email}">
                        <select class="select">
                            <option>New York</option>
                            <option>Nevada</option>
                            <option>California</option>
                            <option>Texas</option>
                        </select>
                        <button class="btn btn-primary btn-block" onclick="closeModal()">Verify & Update</button>
                        <button class="btn btn-secondary btn-block" onclick="closeModal()">Cancel</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        function showContactModal(memberId) {
            const member = db.directory.find(m => m.id === memberId);
            
            const modal = document.createElement('div');
            modal.className = 'modal-overlay';
            modal.innerHTML = `
                <div class="modal">
                    <div class="modal-title">Contact ${member.name}</div>
                    <div class="modal-subtitle">${member.firm}</div>
                    
                    <div class="card mt-2">
                        <div class="flex gap-2 items-center">
                            <div class="icon-avatar">
                                <span>${member.icon}</span>
                            </div>
                            <div>
                                <div style="font-weight: 600;">${member.name}</div>
                                <div style="font-size: 12px; color: var(--text-secondary);">${member.areas.join(', ')}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid gap-2 mt-3">
                        <button class="btn btn-primary btn-block" onclick="closeModal()">
                            📧 Send Message
                        </button>
                        ${member.email ? `
                            <button class="btn btn-secondary btn-block" onclick="window.location.href='mailto:${member.email}'; closeModal();">
                                ✉️ Email: ${member.email}
                            </button>
                        ` : ''}
                        <button class="btn btn-secondary btn-block" onclick="closeModal()">
                            📱 Request Phone Contact
                        </button>
                        <button class="btn btn-secondary btn-block" onclick="closeModal()">Cancel</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }

        function closeModal() {
            const modal = document.querySelector('.modal-overlay');
            if (modal) modal.remove();
        }

        function completeRSVP() {
            closeModal();
            alert('Registration successful! You will receive a confirmation email.');
        }

        function togglePlan() {
            state.user.plan = state.user.plan === 'FREE' ? 'PLUS' : 'FREE';
            renderProfile(document.getElementById('content'));
        }

        function toggleCommittee(name) {
            const index = state.joinedCommittees.indexOf(name);
            if (index > -1) {
                state.joinedCommittees.splice(index, 1);
            } else {
                state.joinedCommittees.push(name);
            }
            if (state.currentCommittee) {
                renderCommitteeProfile(document.getElementById('content'), state.currentCommittee);
            } else {
                renderCommittees(document.getElementById('content'));
            }
        }

        function createPost() {
            const input = document.getElementById('postInput');
            if (input.value.trim()) {
                db.community.unshift({
                    id: `p${Date.now()}`,
                    author: state.user.name,
                    body: input.value,
                    time: 'now',
                    likes: 0,
                    replies: 0
                });
                renderCommunity(document.getElementById('content'));
            }
        }

        function filterDirectory(searchTerm) {
            console.log('Filter directory:', searchTerm);
        }

        function filterByArea(area) {
            console.log('Filter by area:', area);
        }

        function filterByCommittee(committee) {
            console.log('Filter by committee:', committee);
        }

        // Initialize App
        window.addEventListener('DOMContentLoaded', () => {
            // Set initial theme
            switchOrg('nybar');
            
            // Render initial content
            renderHome(document.getElementById('content'));
        });
    