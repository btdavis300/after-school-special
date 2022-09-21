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



puts "finish seeding!"
