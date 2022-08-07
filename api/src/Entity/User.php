<?php

namespace App\Entity;

use App\Repository\UserRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use JsonSerializable;

/**
 * User
 *
 * @ApiResource(formats={"json"})
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="`users`")
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface, JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     * @ORM\Column(name="id", type="integer", nullable=false)
     */
    public $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    public $username;

    /**
     * @var string The hashed password
     * @ORM\Column(type="string", length=255)
     */
    public $password;
    public $plainPassword;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=100, nullable=false)
     */
    public $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="prenom", type="string", length=100, nullable=false)
     */
    public $prenom;

    /**
     * @ORM\OneToMany(targetEntity=Simulation::class, mappedBy="user_id")
     */
    public $simulations;

    /*
    public function __construct($username , $nom, $prenom, $password)
    {
        $this->username = $username;
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->password = $password;
        $this->simulations = new ArrayCollection();
    }*/


    /**
     * @deprecated since Symfony 5.3, use getUserIdentifier instead
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        return ["user"];
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        $this->plainPassword = null;
    }

    /**
     * @return Collection|Simulation[]
     */
    public function getSimulation(): Collection
    {
        return $this->simulations;
    }

    public function addSimulation(Simulation $simulation): self
    {
        if (!$this->simulations->contains($simulation)) {
            $this->simulations[] = $simulation;
            $simulation->setUserId($this);
        }

        return $this;
    }

    public function removeSimulation(Simulation $simulation): self
    {
        if ($this->simulations->removeElement($simulation)) {
            // set the owning side to null (unless already changed)
            if ($simulation->getUserId() === $this) {
                $simulation->setUserId(null);
            }
        }

        return $this;
    }

    public function jsonSerialize()
    {
        return [
            "id" => $this->id,
            "username" => $this->username,
        ];
    }

}