<?php

namespace App\Controller;

use Symfony\Component\Sßecurity\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Simulation;

/**
 * @Route("/api/simulation", name="simulation")
 */
class SimulationController extends AbstractController
{
  private $manager;
  private $repository;
  // private $tokenStorage;

  public function __construct(EntityManagerInterface $manager, ValidatorInterface $validator)
  {
    $this->manager      = $manager;
    $this->repository   = $manager->getRepository(Simulation::class);
    $this->validator    = $validator;
  }

  /**
   * @Route("/", name="get")
   */
  public function getSimulations(Request $request): JsonResponse
  {
    $Simulations = $this->repository->findAll();
    return new JsonResponse($Simulations, Response::HTTP_OK);
  }

  /**
   * @Route("/create", name="create", methods={"POST"})
   */
  public function createSimulation(Request $request)
  {
    $data = json_decode($request->getContent(), true);

    $constraints = new Assert\Collection([
      'type_projet' =>   [new Assert\NotBlank()],
      'type_bien' =>   [new Assert\NotBlank()],
      'nature_bien' =>   [new Assert\NotBlank()],
      'usage_bien' =>   [new Assert\NotBlank()],
      //'pays_bien' =>   [new Assert\NotBlank()],
      //'ville_bien' =>   [new Assert\NotBlank()],

      'emprunteur_nom' =>   [new Assert\NotBlank()],
      'emprunteur_prenom' =>   [new Assert\NotBlank()],
      'emprunteur_tel' =>   [new Assert\NotBlank()],
      'emprunteur_email' =>   [new Assert\NotBlank()],
      'emprunteur_revenu' =>   [new Assert\NotBlank()],
/*
      'coemprunteur_nom' =>   [new Assert\NotBlank()],
      'coemprunteur_prenom' =>   [new Assert\NotBlank()],
      'coemprunteur_tel' =>   [new Assert\NotBlank()],
      'coemprunteur_email' =>   [new Assert\NotBlank()],
      'coemprunteur_revenu' =>   [new Assert\NotBlank()],
*/
      'emprunteur_rue' =>   [new Assert\NotBlank()],
      'emprunteur_cp' =>   [new Assert\NotBlank()],
      'emprunteur_ville' =>   [new Assert\NotBlank()],

      'duree' =>  [new Assert\NotBlank()],
      'budget' => [new Assert\NotBlank()],
      'apport' => [new Assert\NotBlank()]
    ]);

    $errors = $this->validator->validate($data, $constraints);
    if (count($errors) > 0) 
      return new Response($errors);

    /*
    $adresse = new Address();
    $adresse->rue = $data['rue'];
    $adresse->cp = $data['rue'];
    $adresse->ville = $data['ville'];

    $emprunteur = new User();
    $emprunteur->username = $data['emprunteur_email'];
    $emprunteur->nom = $data['emprunteur_nom'];
    $emprunteur->prenom = $data['emprunteur_prenom'];
    $emprunteur->tel = $data['emprunteur_tel'];
    $emprunteur->adresse = $adresse;*/

    $simulation = new Simulation();
    $simulation->type_projet = $data['type_projet'];
    $simulation->type_bien = $data['type_bien'];
    $simulation->nature_bien = $data['nature_bien'];
    $simulation->usage_bien = $data['usage_bien'];
    $simulation->pays_bien = 'aa';//$data['pays_bien'];
    $simulation->cp_bien = 'aa';//$data['cp_bien'];

    $simulation->budget = $data['budget'];
    $simulation->apport = $data['apport'];
    $simulation->duree = $data['duree'];
    $simulation->taux = '2';//$data['taux'];
    $simulation->tauxAssurance = '2';//$data['duree'];

    $simulation->emprunteur_email = $data['emprunteur_email'];
    $simulation->emprunteur_nom = $data['emprunteur_nom'];
    $simulation->emprunteur_prenom = $data['emprunteur_prenom'];
    $simulation->emprunteur_tel = $data['emprunteur_tel'];
    $simulation->emprunteur_revenu = $data['emprunteur_revenu'];
/*
    $simulation->coemprunteur_email = $data['coemprunteur_email'];
    $simulation->coemprunteur_nom = $data['coemprunteur_nom'];
    $simulation->coemprunteur_prenom = $data['coemprunteur_prenom'];
    $simulation->coemprunteur_tel = $data['coemprunteur_tel'];
    $simulation->coemprunteur_revenu = $data['coemprunteur_revenu'];
*/

    $user = $this->repository->findOneBy(["username" => $data['emprunteur_email']]);
    if ($user) {
      $simulation->User = $user;
    }

    $this->manager->persist($simulation);
    $this->manager->flush();

    return new JsonResponse(['status' => 'Simulation added!'], Response::HTTP_OK);
  }

  /**
   * @Route("/update/{id}", name="update", methods={"POST"})
   */
  public function updateSimulation(Request $request, $id)
  {
    $data = json_decode($request->getContent(), true);

    $constraints = new Assert\Collection([
      'Simulation_content' => [new Assert\NotBlank()],
    ]);

    $errors = $this->validator->validate($data, $constraints);
    if (count($errors) > 0) return new Response($errors);

    $Simulation_content  = $data['Simulation_content'];

    $Simulation = $this->repository->findOneBy(['id' => $id]);
    $Simulation
      ->setSimulationContent($Simulation_content);

    $this->manager->persist($Simulation);
    $this->manager->flush();

    return new JsonResponse(['status' => 'Simulation updated!'], Response::HTTP_OK);
  }

  /**
   * @Route("/delete/{id}", name="delete", methods={"DELETE"})
   */
  public function deleteSimulation($id): JsonResponse
  {
    $Simulation = $this->repository->findOneBy(['id' => $id]);
    $this->manager->remove($Simulation);
    $this->manager->flush();
    return new JsonResponse(['status' => 'Simulation deleted!'], Response::HTTP_OK);
  }
}