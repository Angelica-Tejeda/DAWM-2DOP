/*INSERT INTO `proyectofinal`.`admins` (`id`, `user`, `password`, `createdAt`, `updatedAt`) VALUES 
('1', 'admin', 'admin', '2021-02-01 00:00:00', '2021-02-01 00:00:00');

INSERT INTO `proyectofinal`.`galerias` (`id`, `nombre`, `descripcion`, `createdAt`, `updatedAt`) VALUES 
('1', 'Bar', 'Nuestro Bar', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('2', 'Productos', 'Nuestros Productos', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('3', 'Waffle', 'Waffle', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('4', 'Te Rojo', 'Te Rojo', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('5', 'Te con Fondo', 'Te con Fondo', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('6', 'Te', 'Te', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('7', 'Logo', 'Logo', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('8', 'Batido de frutilla', 'Batido de frutilla', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('9', 'Local', 'Local', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('10', 'Local', 'Local', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('11', 'Bottellas', 'Bottellas', '2021-02-01 00:00:00', '2021-02-01 00:00:00');

INSERT INTO `proyectofinal`.`menus` (`id`, `nombre`, `ingredientes`, `createdAt`, `updatedAt`) VALUES 
('1', 'Nutella Waffles', 'frutillas , almendras, miel y nutella', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('2', 'Probar Waffles', 'frutillas , almendras, miel y mantequila de mani', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('3', 'Arequipe Waffles', 'banana, miel y manjar', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('4', 'Salsamoras Waffles', 'frutillas , moras, miel y mermelada', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('5', 'Milkshakes', 'Banana caramelo, rollo de canela, oreo cookies, oreo menta, chocobanana, cafe latte, mocha caramelo, cookies & cream, piña colada', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('6', 'Mega Tés', 'Mega Original o Tropical, Blue Curacao, Sunrise Punch, Peppermint, Lavanda, mojite', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('7', 'Volcan de chocolate', 'Nuevo', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('8', 'Ponche de frutas', 'Nuevo', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('9', 'Mega Café', 'Nuevo', '2021-02-01 00:00:00', '2021-02-01 00:00:00'),
('10', 'Botella Detox', 'Nuevo', '2021-02-01 00:00:00', '2021-02-01 00:00:00');

INSERT INTO `proyectofinal`.`imagenes` (`id`, `alt`, `imgSRC`, `createdAt`, `updatedAt`, `galeriaId`, `menuId`) VALUES 
('1', 'Nutella Waffles', 'https://i.imgur.com/YnYcwx6.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', null, '1'),
('2', 'Probar Waffles', 'https://i.imgur.com/son56r6.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', null, '2'),
('3', 'Arequipe Waffles', 'https://i.imgur.com/8bK4li5.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', null, '3'),
('4', 'Salsamoras Waffles', 'https://i.imgur.com/H2rlsUI.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', null, '4'),
('5', 'Milkshakes', 'https://i.imgur.com/wK1mnbt.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', null, '5'),
('6', 'Mega Tés', 'https://i.imgur.com/ZB2xYEw.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', null, '6'),
('7', 'Volcan de chocolate', 'https://i.imgur.com/vdPzOGR.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', null, '7'),
('8', 'Ponche de frutas', 'https://i.imgur.com/5du4r75.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', null, '8'),
('9', 'Mega Café', 'https://i.imgur.com/7oPayhR.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', null, '9'),
('10', 'Botella Detox', 'https://i.imgur.com/SqgD6HY.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', null, '10'),
('11', 'Bar', 'https://i.imgur.com/mtPdFki.jpg', '2021-02-01 00:00:00', '2021-02-01 00:00:00', '1', null),
('12', 'Waffle con te', 'https://i.imgur.com/p3HU6Iu.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', '2', null),
('13', 'Waffle', 'https://i.imgur.com/ilCusdF.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', '3', null),
('14', 'Te Rojo', 'https://i.imgur.com/qbdugHI.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', '4', null),
('15', 'Te con Fondo', 'https://i.imgur.com/mYzaRwm.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', '5', null),
('16', 'Te', 'https://i.imgur.com/7JkZTTn.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', '6', null),
('17', 'Logo', 'https://i.imgur.com/yvKZESJ.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', '7', null),
('18', 'Batido de frutilla', 'https://i.imgur.com/hyxEKM2.jpg', '2021-02-01 00:00:00', '2021-02-01 00:00:00', '8', null),
('19', 'Local', 'https://i.imgur.com/UIPkwp0.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', '9', null),
('20', 'Local', 'https://i.imgur.com/FKuN2Ef.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', '10', null),
('21', 'Bottellas', 'https://i.imgur.com/bkORMSV.png', '2021-02-01 00:00:00', '2021-02-01 00:00:00', '11', null);*/
