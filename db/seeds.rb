# t.string "program_type"
# t.string "name"
# t.string "community"
# t.string "agency"
# t.integer "contact_number"
# t.string "address"
# t.integer "zipcode"
# t.string "age_group"
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
puts "started seeding"
Program.create(
    program_type: "Transitional Independent Living",
    name: "Girls Educational & Mentoring Services, Inc.",
    community: "Manhattan",
    agency: "Girls Educational & Mentoring Services, Inc.",
    contact_number: "212.926.8089 ext. 25",
    address: nil,
    zipcode: 10039,
    age_group: nil
)

Program.create(
    program_type: "Transitional Independent Living",
    name: "Good Shepherd Services",
    community: "Manhattan",
    agency: "Good Shepherd Services",
    contact_number: "646.485.6900",
    address: nil,
    zipcode: 10011,
    age_group: nil
)

Program.create(
    program_type: "Transitional Independent Living",
    name: "Green Chimneys",
    community: "Manhattan",
    agency: "Green Chimneys",
    contact_number: "212.491.5911 ext. 13",
    address: nil,
    zipcode: 10038,
    age_group: nil
)

Program.create(
    program_type: "Transitional Independent Living",
    name: "Inwood House",
    community: "Manhattan",
    agency: "Inwood House",
    contact_number: "212.861.4325",
    address: nil,
    zipcode: 10065,
    age_group: nil
)

Program.create(
    program_type: "Transitional Independent Living",
    name: "Rachel's Place",
    community: "Brooklyn",
    agency: "Rachel's Place",
    contact_number: "718.253.5364",
    address: nil,
    zipcode: 11234,
    age_group: nil
)

Program.create(
    program_type: "Transitional Independent Living",
    name: "Safe Space NYC, Inc",
    community: "Queens",
    agency: "Safe Space NYC, Inc",
    contact_number: "718.526.3000",
    address: nil,
    zipcode: 11433,
    age_group: nil
)
Program.create(
    program_type: "Transitional Independent Living",
    name: "SCO Family of Services",
    community: "Brooklyn",
    agency: "SCO Family of Services",
    contact_number: "718.827.8465",
    address: nil,
    zipcode: 11208,
    age_group: nil
)
Program.create(
    program_type: "Transitional Independent Living",
    name: "SCO Family of Services II",
    community: "Brooklyn",
    agency: "SCO Family of Services II",
    contact_number: "718.782.0198",
    address: nil,
    zipcode: 11211,
    age_group: nil
)
Program.create(
    program_type: "Transitional Independent Living",
    name: "SCO Family of Services III",
    community: "Brooklyn",
    agency: "SCO Family of Services III",
    contact_number: "718.326.5931",
    address: nil,
    zipcode: 11211,
    age_group: nil
)

Program.create(
    program_type: "Transitional Independent Living",
    name: "SCO Family of Services IV",
    community: "Queens",
    agency: "SCO Family of Services IV",
    contact_number: "718.217.5613",
    address: nil,
    zipcode: 11429,
    age_group: nil
)

Program.create(
    program_type: "Drop-In Center",
    name: "SCO Drop In Center",
    community: "Brooklyn",
    agency: "SCO Family of Services",
    contact_number: "718.384.7083",
    address: "89 South 10th Street",
    zipcode: 11221,
    age_group: nil
)

Program.create(
    program_type: "Drop-In Center",
    name: "Safe Horizon, Inc",
    community: "Manhattan",
    agency: "Safe Horizon, Inc",
    contact_number: "212.695.2220",
    address: "209 West 125th Street",
    zipcode: 10027,
    age_group: nil
)

Program.create(
    program_type: "Street Outreach",
    name: "La Asociacion Benefica Cultural Father Billini",
    community: "Queens",
    agency: "La Asociacion Benefica Cultural Father Billini",
    contact_number: "718.651.8427",
    address: "104-11 37th Avenue",
    zipcode: 11368,
    age_group: nil
)

Program.create(
    program_type: "Crisis Shelter",
    name: "Ali Forney Center",
    community: "Brooklyn",
    agency: "Ali Forney Center",
    contact_number: "212.206.0574",
    address: "216 23rd Street",
    zipcode: 11232,
    age_group: nil
)

Program.create(
    program_type: "Drop-In Center",
    name: "Bronx Community Pride Center, Inc.",
    community: "Bronx",
    agency: "Bronx Community Pride Center, Inc.",
    contact_number: "718.292.4368",
    address: "448 East 149th Street",
    zipcode: 10455,
    age_group: nil
)

Program.create(
    program_type: "Crisis Shelter",
    name: "Ali Forney Center",
    community: "Brooklyn",
    agency: "Ali Forney Center",
    contact_number: "212.206.0574",
    address: "241 Taffee Place",
    zipcode: 11205,
    age_group: nil
)

Program.create(
    program_type: "Drop-In Center",
    name: "Seamans Society for Children and Families",
    community: "Staten Island",
    agency: "Seamans Society for Children and Families",
    contact_number: "718.447.7740 ext. 248",
    address: "50 Bay Street",
    zipcode: 10301,
    age_group: nil
)

Program.create(
    program_type: "Transportation",
    name: "Safe Horizon, Inc",
    community: "Manhattan",
    agency: "Safe Horizon, Inc",
    contact_number: "212.695.2220",
    address: "209 West 125th Street",
    zipcode: 10027,
    age_group: nil
)

Program.create(
    program_type: "Crisis Shelter",
    name: "Covenant House New York",
    community: "Manhattan",
    agency: "Covenant House New York",
    contact_number: "212.613.0300 ext. 0531",
    address: "460 West 41st Street",
    zipcode: 10036,
    age_group: "Under 21"
)

Program.create(
    program_type: "Crisis Shelter",
    name: "Safe Horizon",
    community: "Manhattan",
    agency: "Safe Horizon, Inc.",
    contact_number: "212.268.3943",
    address: "165 West 131st Street",
    zipcode: 10027,
    age_group: nil
)

Program.create(
    program_type: "Crisis Shelter",
    name: "Covenant House New York",
    community: "Manhattan",
    agency: "Covenant House New York",
    contact_number: "212.613.0300 ext. 0532",
    address: "427 West 52nd Street",
    zipcode: 10019,
    age_group: "Under 21"
)

Program.create(
    program_type: "Drop-In Center",
    name: "Safe Space NYC, Inc",
    community: "Queens",
    agency: "Safe Space NYC, Inc",
    contact_number: "718.526.2400",
    address: "89-31 161St",
    zipcode: 11432,
    age_group: nil
)

Program.create(
    program_type: "Street Outreach",
    name: "Greenwich Village Youth Council",
    community: "Manhattan",
    agency: "Greenwich Village Youth Council",
    contact_number: "646.209.1264",
    address: "2273 3rd Avenue",
    zipcode: 10037,
    age_group: nil
)

Program.create(
    program_type: "Out of School Time",
    name: "Building T 149",
    community: "Queens",
    agency: "Rockaway Artist Alliance, Inc.",
    contact_number: "718.474.0861",
    address: "Gateway National Recreation Area, Fort Tilden",
    zipcode: 11695,
    age_group: "Elementary/Middle School"
)

Program.create(
    program_type: "Out of School Time",
    name: "Dreamyard A.C.T.I.O.N.",
    community: "Bronx",
    agency: "Dream Yard Project, Inc.",
    contact_number: "718.588.8007",
    address: "The Point CDC, 940 Garrison Avenue",
    zipcode: 10474,
    age_group: "High School" 
)

Program.create(
    program_type: "Out of School Time",
    name: "Drew Hamilton Elementary",
    community: "Manhattan",
    agency: "The Childrens Aid Society",
    contact_number: "212.281.9555",
    address: "2672 Frederick Douglass Boulevard",
    zipcode: 10030,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "x343",
    community: "Bronx",
    agency: "Just Us, Inc.",
    contact_number: "718.292.3883",
    address: "345 Brook Avenue",
    zipcode: 10454,
    age_group: "Middle School"
)

Program.create(
    program_type: "Out of School Time",
    name: "P.S. 56 LOUIS DE SARIO SCHOOL",
    community: "Staten Island",
    agency: "United Activities Unlimited, Inc.",
    contact_number: "718.987.8111",
    address: "250 KRAMER AVENUE",
    zipcode: 10309,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "P.S. 219 KENNEDY-KING SCHOOL",
    community: "Brooklyn",
    agency: "New York Junior Tennis League",
    contact_number: "347.886.3117",
    address: "1060 CLARKSON AVENUE",
    zipcode: 11212,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "Arthur Ashe Institute",
    community: "Brooklyn",
    agency: "Arthur Ashe Institute for Urban Health, Inc",
    contact_number: "718.270.2600",
    address: "450 Clarkson Avenue",
    zipcode: 11203,
    age_group: "High School"
)

Program.create(
    program_type: "Out of School Time",
    name: "P.S. 130 ABRAM STEVENS HEWITT",
    community: "Bronx",
    agency: "Citizens Advice Bureau, Inc.",
    contact_number: "718.292.3452",
    address: "750 Prospect Avenue",
    zipcode: 10455,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "Audrey Johnson DCC",
    community: "Brooklyn",
    agency: "Bushwick Community Action Association, Inc.",
    contact_number: "718.574.0130",
    address: "272 Moffat Street",
    zipcode: 11207,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "Greater Ridgewood Youth Council, Inc.",
    community: "Queens",
    agency: "Greater Ridgewood Youth Council, Inc.",
    contact_number: "718.456.5437",
    address: "1715 Weirfield Street",
    zipcode: 11385,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "The Danny Kaye School",
    community: "Brooklyn",
    agency: "Brooklyn Bureau of Community Services",
    contact_number: "347.834.3097",
    address: "700 Sutter Avenue",
    zipcode: 11207,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "CAMBA",
    community: "Brooklyn",
    agency: "CAMBA",
    contact_number: "718.773.3343",
    address: "790 East New York Avenue",
    zipcode: 11203,
    age_group: "Middle School"
)

Program.create(
    program_type: "Out of School Time",
    name: "St. Jude's",
    community: "Manhattan",
    agency: "Inwood Community Services, Inc.",
    contact_number: "212.942.0043",
    address: "403 West 204th Street",
    zipcode: 10034,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "New Life Child Develop. #2",
    community: "Brooklyn",
    agency: "New Life Child Development Corporation",
    contact_number: "718.417.4206",
    address: "408 Grove Street",
    zipcode: 11237,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "Elias Bernstein School",
    community: "United Activities Unlimited, Inc.",
    agency: "Staten Island",
    contact_number: "718.987.8111",
    address: "1270 Huguenot Avenue",
    zipcode: 10312,
    age_group: "Middle School"
)

Program.create(
    program_type: "Out of School Time",
    name: "Beruckelen School",
    community: "Brooklyn",
    agency: "Groundwork Inc.",
    contact_number: "718.346.2200",
    address: "875 Williams Avenue",
    zipcode: 11207,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "David Marcus School",
    community: "Brooklyn",
    agency: "Flatbush Development Corporation",
    contact_number: "718.859.3800",
    address: "1100 NEWKIRK AVENUE",
    zipcode: 11230,
    age_group: "High School"
)

Program.create(
    program_type: "Out of School Time",
    name: "Childrens Arts & Science Workshops, Inc.",
    community: "Manhattan",
    agency: "Childrens Arts & Science Workshops, Inc.",
    contact_number: "212.927.9233",
    address: "586 WEST 177 STREET",
    zipcode: 10033,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "Rocking the Boat",
    community: "Bronx",
    agency: "Rocking the Boat, Inc.",
    contact_number: "718.466.5799",
    address: "60 East 174th Street",
    zipcode: 10452,
    age_group: "High School"
)

Program.create(
    program_type: "Out of School Time",
    name: "Alexine A. Fenty School",
    community: "Brooklyn",
    agency: "CAMBA",
    contact_number: "718.693.3825",
    address: "330 Rugby Road",
    zipcode: 11226,
    age_group: "Elementary"
)

Program.create(
    program_type: "Out of School Time",
    name: "Thomas Brown School",
    community: "Staten Island",
    agency: "United Activities Unlimited, Inc.",
    contact_number: "718.644.1318",
    address: "80 MAPLE PARKWAY",
    zipcode: 10303,
    age_group: "Elementary"
)

User.create(
    email: "example@example.com",
    password: "12345",
    first_name: "Brennan",
    last_name: "Davis",
    address: "123 Main St.",
    zipcode: 29016,
    children_quantity: 2,
    grade_level: "High School",
    username: "btd300"

)

puts "finish seeding!"
