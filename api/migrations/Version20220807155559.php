<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220807155559 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE simulations (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, type_projet VARCHAR(25) NOT NULL, type_bien VARCHAR(25) NOT NULL, nature_bien VARCHAR(25) NOT NULL, usage_bien VARCHAR(25) NOT NULL, pays_bien VARCHAR(50) NOT NULL, cp_bien VARCHAR(25) NOT NULL, taux NUMERIC(2, 2) NOT NULL, taux_assurance NUMERIC(2, 2) NOT NULL, budget NUMERIC(11, 2) NOT NULL, apport NUMERIC(11, 2) NOT NULL, duree INT NOT NULL, emprunteur_nom VARCHAR(25) NOT NULL, emprunteur_prenom VARCHAR(25) NOT NULL, emprunteur_tel VARCHAR(25) NOT NULL, emprunteur_email VARCHAR(150) NOT NULL, emprunteur_revenu NUMERIC(11, 2) NOT NULL, coemprunteur_nom VARCHAR(25) DEFAULT NULL, coemprunteur_prenom VARCHAR(25) DEFAULT NULL, coemprunteur_tel VARCHAR(25) DEFAULT NULL, coemprunteur_email VARCHAR(150) DEFAULT NULL, coemprunteur_revenu NUMERIC(11, 2) DEFAULT NULL, rue VARCHAR(150) DEFAULT NULL, cp VARCHAR(10) DEFAULT NULL, ville VARCHAR(50) DEFAULT NULL, UNIQUE INDEX UNIQ_DC12BDF9A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `users` (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, password VARCHAR(255) NOT NULL, nom VARCHAR(100) NOT NULL, prenom VARCHAR(100) NOT NULL, UNIQUE INDEX UNIQ_1483A5E9F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE simulations ADD CONSTRAINT FK_DC12BDF9A76ED395 FOREIGN KEY (user_id) REFERENCES `users` (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE simulations DROP FOREIGN KEY FK_DC12BDF9A76ED395');
        $this->addSql('DROP TABLE simulations');
        $this->addSql('DROP TABLE `users`');
    }
}
