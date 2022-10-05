user = User.where(email: 'test@example.com').first_or_create(password: 'password', password_confirmation: 'password')
student_seeds = [
    {
        name: 'Leonardo',
        notes: 'Expert Swordsman, wields katanas',
        rank: 'Blue belt',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdv9ih2Z8rW6whBYQEo6zgm1z91LCZDq9dpQ&usqp=CAU',
    },
    {
        name: 'Raphael',
        notes: 'Quick to anger, wields a pair of sai',
        rank: 'Red belt',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_qnbJ84cDTd2hwXT3czWeNMilBxFlxE09g&usqp=CAU'
    },
    {
        name: 'Donatello',
        notes: 'Peacekeeper, wields an oak bō',
        rank: 'Purple belt',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8niUPVaZkS9xbQjBHf330Z-HJ2cV1jw9AA&usqp=CAU'
    },
    {
        name: 'Michelangelo',
        notes: 'Gifted but distracted, uses nunchucks',
        rank: 'Orange belt',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGyog7zE_BBWPUv7oSveIE9MlxmM2WTMcdw&usqp=CAU'
    },
]

student_seeds.each do |student|
    user.students.create(student)
    p "creating: #{student}"
  end