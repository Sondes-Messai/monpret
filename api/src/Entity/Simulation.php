<?php

namespace App\Entity;
use App\Repository\SimulationRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * Simulations
 *
 * @ApiResource(formats={"json"})
 * @ORM\Table(name="simulations")
 * @ORM\Entity(repositoryClass=SimulationRepository::class)
 */
class Simulation
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    public $id;

/* Projet */ 

    /**
     * @var string|null
     *
     * @ORM\Column(name="type_projet", type="string", length=25, nullable=false)
     */
    public $type_projet;

    /**
     * @var string|null
     *
     * @ORM\Column(name="type_bien", type="string", length=25, nullable=false)
     */
    public $type_bien;

    /**
     * @var string|null
     *
     * @ORM\Column(name="nature_bien", type="string", length=25, nullable=false)
     */
    public $nature_bien;

    /**
     * @var string|null
     *
     * @ORM\Column(name="usage_bien", type="string", length=25, nullable=false)
     */
    public $usage_bien;

    /**
     * @var string|null
     *
     * @ORM\Column(name="pays_bien", type="string", length=50, nullable=false)
     */
    public $pays_bien;

    /**
     * @var string|null
     *
     * @ORM\Column(name="cp_bien", type="string", length=25, nullable=false)
     */
    public $cp_bien;

/* Offre */ 

    /**
     * @var float|null
     *
     * @ORM\Column(name="taux", type="decimal", precision=2, scale=2, nullable=false)
     */
    public $taux;

    /**
     * @var float|null
     *
     * @ORM\Column(name="taux_assurance", type="decimal", precision=2, scale=2, nullable=false)
     */
    public $tauxAssurance;

/* Financement */ 

    /**
     * @var float
     *
     * @ORM\Column(name="budget", type="decimal", precision=11, scale=2, nullable=false)
     */
    public $budget;

    /**
     * @var int|null
     *
     * @ORM\Column(name="apport", type="decimal", precision=11, scale=2, nullable=false)
     */
    public $apport;

    /**
     * @var int|null
     *
     * @ORM\Column(name="duree", type="integer", nullable=false)
     */
    public $duree;

/* Emprunteur */     

    /**
     * @var string
     *
     * @ORM\Column(name="emprunteur_nom", type="string", length=25, nullable=false)
     */
    public $emprunteur_nom;

    /**
     * @var string
     *
     * @ORM\Column(name="emprunteur_prenom", type="string", length=25, nullable=false)
     */
    public $emprunteur_prenom;

    /**
     * @var string
     *
     * @ORM\Column(name="emprunteur_tel", type="string", length=25, nullable=false)
     */
    public $emprunteur_tel;

    /**
     * @var string
     *
     * @ORM\Column(name="emprunteur_email", type="string", length=150, nullable=false)
     */
    public $emprunteur_email;

    /**
     * @var float
     *
     * @ORM\Column(name="emprunteur_revenu", type="decimal", precision=11, scale=2, nullable=false)
     */
    public $emprunteur_revenu;

    /**
     * @var string
     *
     * @ORM\Column(name="coemprunteur_nom", type="string", length=25, nullable=true)
     */
    public $coemprunteur_nom;

    /**
     * @var string
     *
     * @ORM\Column(name="coemprunteur_prenom", type="string", length=25, nullable=true)
     */
    public $coemprunteur_prenom;

    /**
     * @var string
     *
     * @ORM\Column(name="coemprunteur_tel", type="string", length=25, nullable=true)
     */
    public $coemprunteur_tel;

    /**
     * @var string
     *
     * @ORM\Column(name="coemprunteur_email", type="string", length=150, nullable=true)
     */
    public $coemprunteur_email;

    /**
     * @var float
     *
     * @ORM\Column(name="coemprunteur_revenu", type="decimal", precision=11, scale=2, nullable=true)
     */
    public $coemprunteur_revenu;

/* Adresse */  

    /**
     * @var string|null
     *
     * @ORM\Column(name="rue", type="string", length=150, nullable=true)
     */
    public $rue;

    /**
     * @var int|null
     *
     * @ORM\Column(name="cp", type="string", length=10, nullable=true)
     */
    public $cp;

    /**
     * @var string|null
     *
     * @ORM\Column(name="ville", type="string", length=50, nullable=true)
     */
    public $ville;

    /**
     * @var \User
     *
     * @ORM\OneToOne(targetEntity="User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    public $User;

}
