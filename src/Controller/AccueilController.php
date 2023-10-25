<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class AccueilController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {

        return $this->redirectToRoute('Accueil');
    }

}
